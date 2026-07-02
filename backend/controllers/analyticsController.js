const Analytics = require("../models/Analytics");
const Job = require("../models/Job");
const Application = require("../models/Application");

// @desc    Get or generate analytics for the logged-in employer
// @route   GET /api/analytics
// @access  Private (Employer only)
const getEmployerAnalytics = async (req, res) => {
    try {
        if (req.user.role !== "employer") {
            return res.status(403).json({ message: "Only employers can access analytics" });
        }

        // Fetch live stats directly from DB
        const totalJobsPosted = await Job.countDocuments({ company: req.user._id });

        const employerJobs = await Job.find({ company: req.user._id }).select("_id");
        const jobIds = employerJobs.map((job) => job._id);

        const totalApplications = await Application.countDocuments({ job: { $in: jobIds } });
        const totalHired = await Application.countDocuments({
            job: { $in: jobIds },
            status: "Offered",
        });

        // Upsert analytics record for this employer
        const analytics = await Analytics.findOneAndUpdate(
            { employer: req.user._id },
            { totalJobsPosted, totalApplications, totalHired },
            { new: true, upsert: true }
        );

        res.status(200).json(analytics);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// @desc    Get application status breakdown for a specific job
// @route   GET /api/analytics/job/:jobId
// @access  Private (Employer only — must own the job)
const getJobAnalytics = async (req, res) => {
    try {
        if (req.user.role !== "employer") {
            return res.status(403).json({ message: "Only employers can access analytics" });
        }

        const job = await Job.findById(req.params.jobId);

        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }

        if (job.company.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: "Not authorized to view analytics for this job" });
        }

        // Count applications per status
        const statusBreakdown = await Application.aggregate([
            { $match: { job: job._id } },
            { $group: { _id: "$status", count: { $sum: 1 } } },
        ]);

        const totalApplications = await Application.countDocuments({ job: job._id });

        res.status(200).json({
            job: { id: job._id, title: job.title },
            totalApplications,
            statusBreakdown,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// @desc    Get platform-wide stats (admin use or public summary)
// @route   GET /api/analytics/summary
// @access  Public
const getPlatformSummary = async (req, res) => {
    try {
        const totalJobs = await Job.countDocuments({ isClosed: false });
        const totalApplications = await Application.countDocuments();
        const totalEmployers = await Job.distinct("company").then((ids) => ids.length);

        res.status(200).json({
            totalActiveJobs: totalJobs,
            totalApplications,
            totalEmployers,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

module.exports = {
    getEmployerAnalytics,
    getJobAnalytics,
    getPlatformSummary,
};

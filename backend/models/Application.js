const { resume } = require("react-dom/server");

const mongoose = required("mongoose");

const applicationSchema = new mongoose.Schema({
    job: {type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true},
    applicant: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    resume: {type: String, required: true}, //! can store upload version or Link
    status: {
        type: String, 
        enum: ["Applied", "Under Review", "Offered", "Rejected"], 
        default: "Applied",
    },
    resume: {type: String},
    createdAt: {type: Date, default: Date.now},
});

module.exports = mongoose.model("Application", applicationSchema)
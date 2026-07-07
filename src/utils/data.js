import { LayoutDashboard, Plus, Briefcase, Building2 } from "lucide-react";

export const landingFeatures = {
  title: "Everything You Need to",
  highlightedTitle: "Succeed",
  subtitle:
    "Whether you're looking for your next opportunity or the perfect candidate, we have the tools and features to make it happen.",
  groups: [
    {
      title: "For Job Seekers",
      accent: "primary",
      features: [
        {
          icon: "Search",
          title: "Smart Job Matching",
          description:
            "AI-powered algorithm matches you with relevant opportunities based on your skills and preferences.",
          variant: "card",
        },
        {
          icon: "FileText",
          title: "Resume Builder",
          description:
            "Create professional resumes with our intuitive builder and templates designed by experts.",
          variant: "card",
        },
        {
          icon: "MessageSquare",
          title: "Direct Communication",
          description:
            "Connect directly with hiring managers and recruiters through our secure messaging platform.",
          variant: "plain",
        },
        {
          icon: "ClipboardCheck",
          title: "Skill Assessment",
          description:
            "Showcase your abilities with verified skill tests and earn badges that employers trust.",
          variant: "plain",
        },
      ],
    },
    {
      title: "For Employers",
      accent: "secondary",
      features: [
        {
          icon: "Users",
          title: "Talent Pool Access",
          description:
            "Access our vast database of pre-screened candidates and find the perfect fit for your team.",
          variant: "card",
          highlighted: true,
        },
        {
          icon: "BarChart3",
          title: "Analytics Dashboard",
          description:
            "Track your hiring performance with detailed analytics and insights on candidate engagement.",
          variant: "card",
        },
        {
          icon: "ShieldCheck",
          title: "Verified Candidates",
          description:
            "All candidates undergo background verification to ensure you're hiring trustworthy professionals.",
          variant: "plain",
        },
        {
          icon: "Clock",
          title: "Quick Hiring",
          description:
            "Streamlined hiring process reduces time-to-hire by 60% with automated screening tools.",
          variant: "plain",
        },
      ],
    },
  ],
};

// Navigation menu for employer
export const NAVIGATION_MENU = [
{ id: "employer-dashboard", name: "Dashboard", icon: LayoutDashboard },
{ id: "post-job", name: "Post Job", icon: Plus },
{ id: "manage-jobs", name: "Manage Jobs", icon: Briefcase },
{ id: "company-profile", name: "Company Profile", icon: Building2 },
];

// ── Static demo data for employer dashboard ───────────────────────────────────

export const RECENT_JOBS = [
  {
    _id: "job_1",
    title: "Backend Developer",
    location: "New York",
    createdAt: "2025-07-23T09:00:00.000Z",
    isActive: true,
    isClosed: false,
    applicantCount: 12,
  },
  {
    _id: "job_2",
    title: "Frontend Developer",
    location: "New York",
    createdAt: "2025-07-23T09:00:00.000Z",
    isActive: false,
    isClosed: true,
    applicantCount: 8,
  },
  {
    _id: "job_3",
    title: "UI/UX Designer",
    location: "Remote",
    createdAt: "2025-07-20T08:00:00.000Z",
    isActive: true,
    isClosed: false,
    applicantCount: 5,
  },
];

export const RECENT_APPLICATIONS = [
  {
    _id: "app_1",
    applicant: "John Mensah",
    job: { title: "Backend Developer" },
    updatedAt: new Date(Date.now() - 14 * 60 * 60 * 1000).toISOString(), // 14 hours ago
    status: "pending",
  },
  {
    _id: "app_2",
    applicant: "Sarah Osei",
    job: { title: "Frontend Developer" },
    updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    status: "shortlisted",
  },
  {
    _id: "app_3",
    applicant: "David Asante",
    job: { title: "UI/UX Designer" },
    updatedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
    status: "reviewing",
  },
  {
    _id: "app_4",
    applicant: "Ama Boateng",
    job: { title: "Backend Developer" },
    updatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days ago
    status: "accepted",
  },
];
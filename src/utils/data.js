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
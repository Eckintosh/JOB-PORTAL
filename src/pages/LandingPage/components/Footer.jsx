import { Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";

const footerLinks = [
  { label: "Find Jobs", path: "/find-jobs" },
  { label: "For Employers", path: "/employer-dashboard" },
  { label: "Privacy Policy", path: "#privacy" },
  { label: "Terms of Service", path: "#terms" },
];

const Footer = () => {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-tertiary py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="mx-auto inline-flex items-center gap-4 text-left"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary text-tertiary shadow-md">
            <Briefcase className="h-8 w-8" />
          </span>
          <span className="text-4xl font-bold tracking-normal text-secondary md:text-5xl">
            JobPortal
          </span>
        </button>

        <p className="mx-auto mt-8 max-w-2xl text-xl leading-8 text-secondary/70">
          Connecting talented professionals with innovative companies worldwide.
          Your career success is our mission.
        </p>

        <nav className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {footerLinks.map((link) =>
            link.path.startsWith("#") ? (
              <a
                key={link.label}
                href={link.path}
                className="text-lg font-semibold text-secondary/70 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ) : (
              <button
                key={link.label}
                type="button"
                onClick={() => navigate(link.path)}
                className="text-lg font-semibold text-secondary/70 transition-colors hover:text-primary"
              >
                {link.label}
              </button>
            )
          )}
        </nav>

        <p className="mt-14 text-lg text-secondary/60">
          Copyright {year} JobPortal. SPagad Technologies Limited.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import { motion } from "framer-motion";
import {
  BarChart3,
  ClipboardCheck,
  Clock,
  FileText,
  MessageSquare,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";
import { landingFeatures } from "../../../utils/data";

const iconMap = {
  BarChart3,
  ClipboardCheck,
  Clock,
  FileText,
  MessageSquare,
  Search,
  ShieldCheck,
  Users,
};

const accentClasses = {
  primary: {
    text: "text-primary",
    line: "bg-primary",
    icon: "bg-primary/10 text-primary",
  },
  secondary: {
    text: "text-secondary",
    line: "bg-secondary",
    icon: "bg-secondary/10 text-secondary",
  },
  blue: {
    text: "text-primary",
    line: "bg-primary",
    icon: "bg-primary/10 text-primary",
  },
  purple: {
    text: "text-secondary",
    line: "bg-secondary",
    icon: "bg-secondary/10 text-secondary",
  },
};


const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const FeatureItem = ({ feature, accent }) => {
  const Icon = iconMap[feature.icon];
  const colors = accentClasses[accent];

  return (
    <motion.div
      variants={fadeUp}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex items-start gap-4 sm:gap-5"
    >
      <div
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-lg ${colors.icon}`}
      >
        {Icon ? <Icon className="h-7 w-7" /> : null}
      </div>

      <div className="min-w-0">
        <h3 className="text-xl font-bold text-gray-950">{feature.title}</h3>
        <p className="mt-3 max-w-xl text-lg leading-8 text-gray-600">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

const Features = () => {
  return (
    <section className="bg-slate-50 py-20 md:py-24 lg:py-28 px-26">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-normal text-gray-950 md:text-5xl lg:text-6xl">
            {landingFeatures.title}{" "}
            <span className="text-primary">{landingFeatures.highlightedTitle}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
            {landingFeatures.subtitle}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-16 lg:mt-20 lg:grid-cols-2 lg:gap-20 xl:gap-28">
          {landingFeatures.groups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    delayChildren: groupIndex * 0.12,
                    staggerChildren: 0.12,
                  },
                },
              }}
            >
              <h3 className="text-3xl font-bold text-gray-950">{group.title}</h3>
              <div
                className={`mt-4 h-1 w-56 rounded-full ${accentClasses[group.accent].line}`}
              />

              <div className="mt-12 grid gap-14 md:gap-16 lg:gap-20">
                {group.features.map((feature) => (
                  <FeatureItem key={feature.title} feature={feature} accent={group.accent} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

    </section>
  );
};

export default Features;

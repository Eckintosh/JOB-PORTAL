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
  blue: {
    text: "text-blue-600",
    line: "bg-blue-600",
    icon: "bg-blue-50 text-blue-600",
  },
  purple: {
    text: "text-purple-600",
    line: "bg-purple-500",
    icon: "bg-purple-50 text-purple-600",
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const FeatureItem = ({ feature, accent, isCard }) => {
  const Icon = iconMap[feature.icon];
  const colors = accentClasses[accent];

  return (
    <motion.div
      variants={fadeUp}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={
        isCard
          ? `flex items-start gap-5 rounded-lg border border-gray-200 p-6 shadow-sm ${
              feature.highlighted ? "bg-slate-50" : "bg-white"
            }`
          : "flex items-start gap-5"
      }
    >
      <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-lg ${colors.icon}`}>
        {Icon ? <Icon className="h-7 w-7" /> : null}
      </div>

      <div>
        <h3 className="text-xl font-bold text-gray-950">{feature.title}</h3>
        <p className="mt-3 max-w-xl text-lg leading-8 text-gray-600">{feature.description}</p>
      </div>
    </motion.div>
  );
};

const Features = () => {
  const cardGroups = landingFeatures.groups.map((group) => ({
    ...group,
    features: group.features.filter((feature) => feature.variant === "card"),
  }));

  const plainGroups = landingFeatures.groups.map((group) => ({
    ...group,
    features: group.features.filter((feature) => feature.variant === "plain"),
  }));

  return (
    <section className="bg-slate-50 pt-20">
      <div className="container mx-auto px-4">
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
            <span className="text-blue-600">{landingFeatures.highlightedTitle}</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
            {landingFeatures.subtitle}
          </p>
        </motion.div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          {cardGroups.map((group, groupIndex) => (
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
              <div className={`mt-4 h-1 w-56 rounded-full ${accentClasses[group.accent].line}`} />

              <div className="mt-10 space-y-8">
                {group.features.map((feature) => (
                  <FeatureItem
                    key={feature.title}
                    feature={feature}
                    accent={group.accent}
                    isCard
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-24 bg-slate-50 py-20">
        <div className="container mx-auto grid gap-14 px-4 lg:grid-cols-2">
          {plainGroups.map((group, groupIndex) => (
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
              className="space-y-16"
            >
              {group.features.map((feature) => (
                <FeatureItem key={feature.title} feature={feature} accent={group.accent} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

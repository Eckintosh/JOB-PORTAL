import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  ChartNoAxesCombined,
  CircleCheck,
  Users,
} from "lucide-react";

const analyticsStats = [
  {
    icon: Users,
    value: "2.4M+",
    label: "Active Users",
    change: "+15%",
    iconClass: "bg-blue-100 text-blue-700",
  },
  {
    icon: BriefcaseBusiness,
    value: "150K+",
    label: "Jobs Posted",
    change: "+22%",
    iconClass: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: CircleCheck,
    value: "89K+",
    label: "Successful Hires",
    change: "+18%",
    iconClass: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: ChartNoAxesCombined,
    value: "94%",
    label: "Match Rate",
    change: "+8%",
    iconClass: "bg-red-100 text-red-600",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const PlatformAnalytics = () => {
  return (
    <section className="bg-[#eef3fb] py-20 md:py-24 lg:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-5xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-normal text-gray-950 md:text-5xl lg:text-6xl">
            Platform <span className="text-blue-700">Analytics</span>
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-gray-600 md:text-xl">
            Real-time insights and data-driven results that showcase the power of our
            platform in connecting talent with opportunities.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
        >
          {analyticsStats.map((stat) => {
            const Icon = stat.icon;

            return (
              <motion.article
                key={stat.label}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex min-h-60 flex-col justify-between rounded-lg bg-white p-8 shadow-sm ring-1 ring-gray-200/70"
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-lg ${stat.iconClass}`}
                  >
                    <Icon className="h-8 w-8" />
                  </div>
                  <span className="rounded-full bg-emerald-100 px-4 py-1 text-base font-bold text-emerald-700">
                    {stat.change}
                  </span>
                </div>

                <div>
                  <p className="text-5xl font-medium tracking-normal text-gray-950">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-lg font-medium text-gray-600">{stat.label}</p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default PlatformAnalytics;

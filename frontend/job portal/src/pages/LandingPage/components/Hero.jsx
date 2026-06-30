import { motion } from 'framer-motion';
import { Search, ArrowRight, Users, Building2, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const isAuthenticated = true;
  const user = { fullName: "Mark", role: "employer" };

  const navigate = useNavigate();

  const stats = [
    { icon: Users, label: 'Active Users', value: '2.4M+' },
    { icon: Building2, label: 'Companies', value: '50K+' },
    { icon: TrendingUp, label: 'Jobs Posted', value: '150K+' }
  ];

  return (
    <section className="pt-24 pb-16 bg-white min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight pt-10"
          >
            Find Your Dream Job or
            <span className="block bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
              Perfect Hire
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className=""
          >
            Connect talented professionals with innovative companies.
            Your next career move or perfect candidate is just one click away.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className=""
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className=""
              onClick={() => navigate("/find-jobs")}
            >
              <Search className="" />
              <span>Find Jobs</span>
              <ArrowRight className="" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className=""
              onClick={() => {
                navigate(
                  isAuthenticated && user?.role === "employer"
                    ? "/employer-dashboard"
                    : "/login"
                );
              }}
            >
              Post a Job
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className=""
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className=""
              >
                <div className="">
                  <stat.icon className="" />
                </div>
                <div className="">{stat.value}</div>
                <div className="">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Subtle Background Elements */}
      <div className="">
        <div className="" />
        <div className="" />
        <div className="" />
      </div>
    </section>
  );
};

export default Hero;
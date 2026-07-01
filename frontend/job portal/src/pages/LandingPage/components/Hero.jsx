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
            className="text-xl md:text-xl lg:text-2xl text-gray-600 mb-16 mx-auto leading-relaxed"
          >
            Connect talented professionals with innovative companies.
            Your next career move or perfect candidate is just one click away.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-4 rounded-xl flex items-center gap-2 hover:shadow-lg transition-shadow duration-300"
              onClick={() => navigate("/find-jobs")}
            >
              <Search className="w-5 h-5" />
              <span>Find Jobs</span>
              <ArrowRight className="w-5 h-5 font-bold group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white font-bold border border-gray-300 text-gray-800 px-6 py-4 rounded-xl flex items-center gap-2 hover:shadow-lg transition-shadow duration-300"
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
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl max-auto items-center justify-center mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="flex flex-col items-center justify-center text-center p-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
              >
                <div className="text-3xl font-bold text-blue-500 mb-2">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full blur-2xl opacity-30" />
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-purple-100 rounded-full blur-2xl opacity-30" />
        <div className="absolute bottom-20 left-1/2 w-20 h-20 bg-green-100 rounded-full blur-2xl opacity-30" />
      </div>
    </section>
  );
};

export default Hero;
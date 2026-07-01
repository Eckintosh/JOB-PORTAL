import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Users, Building2, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    } else {
      setUser(null);
      setIsAuthenticated(false);
    }
  }, []);

  const stats = [
    { icon: Users, label: 'Active Users', value: '2.4M+' },
    { icon: Building2, label: 'Companies', value: '50K+' },
    { icon: TrendingUp, label: 'Jobs Posted', value: '150K+' }
  ];

  return (
    <section 
      className="relative pt-24 pb-16 min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white/90 z-0" />

      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/15 rounded-full blur-2xl opacity-60" />
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-secondary/10 rounded-full blur-2xl opacity-50" />
        <div className="absolute bottom-20 left-1/2 w-20 h-20 bg-primary/10 rounded-full blur-2xl opacity-60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight pt-10"
          >
            Find Your Dream Job or
            <span className="block bg-gradient-to-r from-primary to-[#973203] text-transparent bg-clip-text">
              Perfect Hire
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-xl lg:text-2xl text-secondary/70 mb-16 mx-auto leading-relaxed"
          >
            Connect talented professionals with innovative companies.
            Your next career move or perfect candidate is just one click away.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className={`flex flex-col sm:flex-row justify-center items-center gap-4 ${isAuthenticated ? 'mb-12' : 'mb-4'}`}
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-primary text-white px-6 py-4 rounded-xl flex items-center gap-2 hover:shadow-lg bg-primary transition-shadow duration-300"
              onClick={() => navigate("/find-jobs")}
            >
              <Search className="w-5 h-5" />
              <span>Find Jobs</span>
              <ArrowRight className="w-5 h-5 font-bold group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-tertiary font-bold border border-secondary/20 text-secondary px-6 py-4 rounded-xl flex items-center gap-2 transition-colors duration-300 hover:border-primary hover:text-primary hover:shadow-lg"
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

          {/* Subtle login/signup options if not logged in */}
          {!isAuthenticated && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex justify-center items-center gap-2 text-sm font-semibold text-secondary/60 mb-12"
            >
              <span>Already have an account?</span>
              <button
                onClick={() => navigate("/login")}
                className="text-primary hover:text-orange-600 hover:underline cursor-pointer font-bold"
              >
                Log In
              </button>
              <span className="text-secondary/30">•</span>
              <span>New to the platform?</span>
              <button
                onClick={() => navigate("/signup")}
                className="text-primary hover:text-orange-600 hover:underline cursor-pointer font-bold"
              >
                Register
              </button>
            </motion.div>
          )}

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl max-auto items-center justify-center mx-auto"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                  className="flex flex-col items-center justify-center text-center p-4 rounded-lg bg-secondary/[0.04] hover:bg-primary/10 transition-colors duration-300"
                >
                  <div className="text-3xl font-bold text-primary mb-2">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="text-2xl font-bold text-secondary mb-1">{stat.value}</div>
                  <div className="text-secondary/70">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;

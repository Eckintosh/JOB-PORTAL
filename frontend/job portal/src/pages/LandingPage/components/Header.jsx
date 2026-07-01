import React from 'react'
import {motion} from "framer-motion";
import {Briefcase} from "lucide-react";
import {useNavigate} from "react-router-dom";

const Header = () => {
    const isAuthenticated = true;
    const user = {fullName: "Eckintosh", role:"employer"};
    const navigate = useNavigate();

  return <motion.header
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
    className='fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-small border-b border-gray-200 shadow-sm'
  >
    <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between h-16  '>
            {/* logo */}
            <div className='flex items-center space-x-3 cursor-pointer' onClick={()=>navigate("/")}>
                <div className='w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center'>
                    <Briefcase className="w-5 h-5 text-white " />
                </div>
                <span className='text-xl font-bold text-gray-900'>JobPortal</span>
            </div>

            {/* navigation links - hidden on mobile */}
            <nav className='hidden md:flex items-center space-x-8'>
                <a onClick={()=>navigate("/find-jobs")} 
                className='text-gray-600 hover:text-gray-900 transition-colors font-medium cursor-pointer'
                >
                    Find Jobs
                </a>
                <a onClick={()=>{
                    navigate(
                        isAuthenticated && user?.role === "employer"
                        ? "/employer-dashboard" : "/login"
                    );
                }} 
                className='text-gray-600 hover:text-gray-900 transition-colors font-medium cursor-pointer'
                >
                    For Employers
                </a>
            </nav>

            {/* authentication buttons */}
            <div className='flex items-center space-x-3'>
                {isAuthenticated ? (
                    <div className='flex items-center space-x-3'>
                        <span className='text-gray-700'>Welcome, {user?.fullName}</span>
                        <a href={
                            user?.role === "employer"
                            ? "/employer-dashboard" : "/find-jobs"

                        }
                        className='bg-linear-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-md hover:from-blue-600 hover:to-purple-600 transition-colors' > 
                        Dashboard
                        </a>
                    </div>
                ) : (
                    <>
                    <a href="/login" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-md hover:from-blue-600 hover:to-purple-600 transition-colors">Login</a>
                    <a href="/signup" className="text-gray-600 hover:text-gray-900 transition-colors font-medium cursor-pointer">Sign Up</a>
                    </>
                )}

            </div>
        </div>
    </div>
  </motion.header>
};

export default Header
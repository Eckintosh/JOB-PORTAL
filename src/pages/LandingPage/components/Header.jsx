import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Header = () => {
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

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        setIsAuthenticated(false);
        navigate("/");
    };

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
                 <img src="/spg-logo.png" alt="logo" className="w-10 h-10 object-cover  " />
                <span className='text-xl font-bold text-primary'>SPG JobPortal</span>
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
                    <div className='flex items-center space-x-4'>
                        <span className='text-gray-700 font-medium'>Welcome, {user?.fullName}</span>
                        <button
                            onClick={() => {
                                navigate(user?.role === "employer" ? "/employer-dashboard" : "/find-jobs");
                            }}
                            className='bg-primary text-white px-5 py-2 rounded-md hover:bg-orange-600 transition-colors font-semibold cursor-pointer text-sm shadow-xs'
                        > 
                            Dashboard
                        </button>
                        <button
                            onClick={handleLogout}
                            className='text-gray-600 hover:text-gray-900 transition-colors font-semibold cursor-pointer text-sm'
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <>
                    <button
                        onClick={() => navigate("/login")}
                        className="bg-primary text-white px-5 py-2 rounded-md hover:bg-orange-600 transition-colors font-semibold cursor-pointer text-sm shadow-xs"
                    >
                        Login
                    </button>
                    <button
                        onClick={() => navigate("/signup")}
                        className="text-gray-600 hover:text-gray-950 transition-colors font-semibold cursor-pointer text-sm"
                    >
                        Sign Up
                    </button>
                    </>
                )}

            </div>
        </div>
    </div>
  </motion.header>
};

export default Header

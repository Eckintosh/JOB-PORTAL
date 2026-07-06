import { useState, useEffect, useRef } from "react";
import {
  Briefcase,
  Building2,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { NAVIGATION_MENU } from "../../utils/data";
import ProfileDropdown from "./ProfileDropdown";

const NavigationItem = ({ item, isActive, onClick, isCollapsed }) => {
  const Icon = item.icon;

  return (
    <button
      onClick={() => onClick(item.id)}
      className={`w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group ${
        isActive
          ? "bg-blue-50 text-blue-700 shadow-sm shadow-blue-50"
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
      }`}
    >
      <Icon
        className={`h-5 w-5 flex-shrink-0 ${
          isActive ? "text-blue-600" : "text-gray-500"
        }`}
      />

      {!isCollapsed && (
        <span className="ml-3 truncate">{item.name}</span>
      )}
    </button>
  );
};

const DashboardLayout = ({ children, activeMenu }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(
    activeMenu || "dashboard"
  );
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (!mobile) {
        setSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close profile dropdown when clicking outside
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavigation = (itemId) => {
    setActiveNavItem(itemId);
    navigate(`/${itemId}`);

    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const sidebarCollapsed = false;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile Overlay */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 ${
          isMobile
            ? sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
            : "translate-x-0"
        } ${sidebarCollapsed ? "w-16" : "w-64"} bg-white border-r border-gray-200`}
      >
        {/* Logo */}
        <div className="flex items-center h-16 border-b border-gray-200 pl-6">
          {!sidebarCollapsed ? (
            <Link to="/" className="flex items-center space-x-3">
              <div className="h-8 w-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-white" />
              </div>

              <span className="text-xl font-bold text-gray-900">
                JobPortal
              </span>
            </Link>
          ) : (
            <div className="h-8 w-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <Building2 className="h-5 w-5 text-white" />
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {NAVIGATION_MENU.map((item) => (
            <NavigationItem
              key={item.id}
              item={item}
              isActive={activeNavItem === item.id}
              onClick={handleNavigation}
              isCollapsed={sidebarCollapsed}
            />
          ))}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-4 left-4 right-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200"
          >
            <LogOut className="h-5 w-5 flex-shrink-0 text-gray-500" />

            {!sidebarCollapsed && (
              <span className="ml-3">Logout</span>
            )}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isMobile ? "ml-0" : sidebarCollapsed ? "ml-16" : "ml-64"
        }`}
      >
        {/* Top Navbar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            {isMobile && (
              <button
                onClick={toggleSidebar}
                className="p-2 rounded-md hover:bg-gray-100"
              >
                {sidebarOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            )}

            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Welcome Back{user?.name ? `, ${user.name}` : "!"}
              </h1>

              <p className="text-sm text-gray-500">
                Here's what's happening with your jobs today.
              </p>
            </div>
          </div>

          {/* Profile */}
          <div className="relative" ref={dropdownRef}>
            <ProfileDropdown  
              isOpen={profileDropdownOpen}
              onToggle={() => setProfileDropdownOpen(!profileDropdownOpen)}
              avatar={user?.avatar || ""}
              companyName={user?.name || ""}
              email={user?.email || ""}
              onLogout={logout}
            />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
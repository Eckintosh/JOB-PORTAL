import { div } from "framer-motion/client";
import { ChevronDown } from "lucide-react"
import { useNavigate } from "react-router-dom"



const ProfileDropdown = ({
    isOpen,
    onToggle,
    avatar,
    companyName,
    email,
    onLogout,
}) => {
    const navigate = useNavigate();
    return (
        <div className="relative">
            <button 
            onClick={onToggle}
            className="flex items-center space-x-3 p-2 rounded-xl hover:bg-gray-50 transition-colors duration-2000 "
            >
                {avatar ? (
                    <img 
                    src={avatar}
                    alt="Avatar"
                    className="w-9 h-9 rounded-xl object-cover"
                    />
                ) : (
                    <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to blue-600 rounded-xl flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                            {companyName.charAt(0).toUpperCase()}
                        </span>
                    </div>
                ) }
                <div className="">
                    <p className="">{companyName}</p>
                    <p className="">Employer</p>
                </div>
                <ChevronDown className="" /> 
            </button>

            {isOpen && (
                <div className="">
                    <div className="">
                        <p className="">{companyName}</p>
                        <p className="">{email}</p>
                    </div>

                    <a onClick={()=> navigate(userRole === "jobseeker" ? "/profile" : "/company-profile")}>View Profile</a>

                    <div className="">
                        <a 
                        href="#"
                        onClick={onLogout}
                        className=""
                        >Logout</a>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProfileDropdown
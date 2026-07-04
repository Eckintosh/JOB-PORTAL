import { useEffect, useState } from "react"
import {
  Plus, Briefcase, Users, Building2, TrendingUp, CheckCircle2,
} from "lucide-react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPath";
import DashboardLayout from "../../components/layout/dashboardLayout";


export const EmployerDashboard = () => {
  const navigate = useNavigate();

  const [dashboardData, setDashboardData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getDashboardOverview = async () => {
    try{
      setIsLoading(true);
      const response = await axiosInstance.get(API_PATHS.DASHBOARD.OVERVIEW);
      
      if(response.status === 200){
        setDashboardData(response.data);
      }
    } catch(error) {
      console.log("error fetching dashboard overview:", error)
    }finally{
      setIsLoading(false)
    }
  };

  useEffect (() => {
    getDashboardOverview();
    return () => {};
  }, []
  );

  return (
    <DashboardLayout activeMenu="employer-dashboard">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Dashboard Overview</h2>
          <p className="text-sm text-gray-500">Monitor your job postings and applications</p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center space-x-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Jobs Posted</p>
                  <p className="text-2xl font-bold text-gray-900">{dashboardData?.totalJobsPosted || 0}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center space-x-4">
                <div className="p-3 bg-orange-50 text-orange-600 rounded-lg">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Applications</p>
                  <p className="text-2xl font-bold text-gray-900">{dashboardData?.totalApplications || 0}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center space-x-4">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Candidates Hired</p>
                  <p className="text-2xl font-bold text-gray-900">{dashboardData?.totalHired || 0}</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate("/post-job")}
                  className="inline-flex items-center px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg shadow-sm transition-colors cursor-pointer"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Post a New Job
                </button>
                <button
                  onClick={() => navigate("/manage-jobs")}
                  className="inline-flex items-center px-4 py-2.5 border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold text-sm rounded-lg shadow-sm transition-colors cursor-pointer"
                >
                  <Briefcase className="mr-2 h-4 w-4" />
                  Manage Existing Jobs
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  )
}

export default EmployerDashboard
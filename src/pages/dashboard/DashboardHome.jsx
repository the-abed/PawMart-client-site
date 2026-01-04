import React, { useEffect, useState } from "react";
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, PieChart, Pie, Cell 
} from "recharts";

const DashboardHome = () => {
  const [stats, setStats] = useState(null);
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

  useEffect(() => {
    fetch("http://paw-mart-server-lyart.vercel.app/dashboard-stats")
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  if (!stats) return <div className="p-10 text-center">Loading Dashboard...</div>;

  return (
    <div className="p-6 bg-base-200 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-primary">Dashboard Overview</h2>

      {/* --- Stat Cards --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="stat bg-base-100 shadow rounded-2xl">
          <div className="stat-title">Total Revenue</div>
          <div className="stat-value text-success">${stats.totalRevenue.toFixed(2)}</div>
        </div>
        <div className="stat bg-base-100 shadow rounded-2xl">
          <div className="stat-title">Total Orders</div>
          <div className="stat-value text-info">{stats.totalOrders}</div>
        </div>
        <div className="stat bg-base-100 shadow rounded-2xl">
          <div className="stat-title">Items Listed</div>
          <div className="stat-value text-secondary">{stats.totalListings}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* --- Bar Chart: Category Distribution --- */}
        <div className="bg-base-100 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-center">Items by Category</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stats.categoryData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="_id" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#641ae3" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* --- Area Chart: Sales Trend --- */}
        <div className="bg-base-100 p-6 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4 text-center">Sales Trend (Last 7 Days)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={stats.salesOverTime}>
                <defs>
                  <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="_id" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="income" stroke="#22c55e" fillOpacity={1} fill="url(#colorIncome)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
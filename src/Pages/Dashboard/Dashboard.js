import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidbar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h2 className="text-3xl text-rose-500 font-boald">Welcome to Dashboard</h2>
                <Outlet></Outlet>
                

            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidbar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-50 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Profile</Link></li>
                    <li><Link to="/dashboard/addreview">Add Review</Link></li>
                    <li><Link to="/dashboard/myorder">My Order</Link></li>
                    <li><Link to="/dashboard/users">All Users</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;
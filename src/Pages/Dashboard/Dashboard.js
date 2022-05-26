import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidbar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                <h2 class="text-3xl text-rose-500 font-boald">Welcome to Dashboard</h2>
                <Outlet></Outlet>
                

            </div>
            <div class="drawer-side">
                <label for="dashboard-sidbar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-50 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Orders</Link></li>
                    <li><Link to="/dashboard/addreview">Add Review</Link></li>
                    <li><Link to="/dashboard/myprofile">My Profile</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin, setAdmin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidbar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content text-center font-bold p-3">
                <h2 className="text-4xl text-rose-700 font-boald">Welcome to Dashboard</h2>
                <Outlet></Outlet>


            </div>
            <div className="drawer-side my-11">
                <label htmlFor="dashboard-sidbar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-50 bg-base-100 text-base-content bg-rose-700 rounded">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard" className='border-4 bg-gray-600 text-white'>My Profile</Link></li>

                    {!admin && <li><Link to="/dashboard/addreview" className='border-4 my-2 bg-gray-600 text-white'>Add Review</Link></li>}

                    {!admin && <li><Link to="/dashboard/myorder" className='border-4 bg-gray-600 text-white'>My Order</Link></li>}

                    {admin && <li><Link to="/dashboard/users" className='border-4 my-2 bg-gray-600 text-white'>All Users</Link></li>}

                    {admin && <li><Link to="/dashboard/addproducts" className='border-4 bg-gray-600 text-white'>Add Products</Link></li>}

                    {admin && <li><Link to="/dashboard/manageproducts" className='border-4 my-2 bg-gray-600 text-white'>Manage Products</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;
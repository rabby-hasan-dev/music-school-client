import { FaHome, FaUtensils, FaBook, FaUsers, FaBars, FaBookReader, FaStripe, FaAccusoft, } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";



const Dashboard = () => {

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();



    // const isAdmin = false;
    // const isAdmin = true;
    // const isInstructor = true
    // const isInstructor = false

    return (
        <div>
            <div className="drawer dark:bg-slate-900 dark:text-gray-100 lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden dark:text-gray-100 dark:bg-slate-900">Open drawer</label>

                </div>
                <div className="drawer-side  ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-slate-200 uppercase  dark:text-gray-100 dark:bg-slate-900 dark:box-shadow-2xl">
                        {/* Sidebar content here */}
                        {
                            isAdmin ? <>
                                <h3 className="text-3xl text-center text-red-600">Admin</h3>
                                <li><NavLink to="/dashboard/adminHome" ><FaHome></FaHome>Admin Home</NavLink></li>


                                <li><NavLink to="/dashboard/manageClasses" ><FaBars></FaBars> Manage classes</NavLink></li>
                                <li>
                                    <NavLink to="/dashboard/manageUsers" > <FaBook></FaBook> Manage Users</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/allUsers" > <FaUsers></FaUsers> All Users</NavLink>
                                </li>
                            </> : isInstructor ? <>
                                <h3 className="text-3xl text-center text-red-600">Instructor</h3>
                                <li><NavLink to="/dashboard/instructorHome" ><FaHome></FaHome>Instructor Home</NavLink></li>

                                <li><NavLink to="/dashboard/addClass" > <FaUtensils></FaUtensils> Add class</NavLink></li>
                                <li><NavLink to="/dashboard/myClasses" > <FaUtensils></FaUtensils>My Classes</NavLink></li>


                            </> : <>
                                <h3 className="text-3xl text-center text-red-600">Student</h3>

                                <li><NavLink to="/dashboard/studentHome" ><FaHome></FaHome>Student Home</NavLink></li>
                                <li><NavLink to="/dashboard/selectedClass" ><FaBook></FaBook> My Selected Class</NavLink></li>

                                <li><NavLink to="/dashboard/enrollClass" ><FaBookReader></FaBookReader> My Enrolled Classes</NavLink></li>
                                <li><NavLink to="/dashboard/paymentHistory" ><FaStripe></FaStripe> Payment History</NavLink></li>

                            </>
                        }
                        <div className="divider"></div>
                        <li><Link to='/'><FaHome></FaHome>Home</Link></li>
                        <li><Link to="/classes"> <FaAccusoft></FaAccusoft>Class</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
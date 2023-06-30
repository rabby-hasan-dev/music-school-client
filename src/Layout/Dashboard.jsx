import { FaHome, FaUtensils, FaBook, FaUsers, FaBars, FaBookReader, } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";



const Dashboard = () => {

    const [isAdmin]=useAdmin();
   const [isInstructor]=useInstructor();
   


    // const isAdmin = false;
    // const isAdmin = true;
    // const isInstructor = true
    // const isInstructor = false

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-slate-200 uppercase ">
                        {/* Sidebar content here */}
                        {
                            isAdmin ? <>   <li><NavLink to="/dashboard/home" ><FaHome></FaHome>Admin Home</NavLink></li>


                                <li><NavLink to="/dashboard/manageClasses" ><FaBars></FaBars> Manage classes</NavLink></li>
                                <li>
                                    <NavLink to="/dashboard/manageUsers" > <FaBook></FaBook> Manage Users</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/allUsers" > <FaUsers></FaUsers> All Users</NavLink>
                                </li>
                            </> : isInstructor ? <>
                                <li><NavLink to="/dashboard/home" ><FaHome></FaHome>Admin Home</NavLink></li>

                                <li><NavLink to="/dashboard/addClass" > <FaUtensils></FaUtensils> Add class</NavLink></li>
                                <li><NavLink to="/dashboard/myClasses" > <FaUtensils></FaUtensils>My Classes</NavLink></li>


                            </> : <>

                                <li><NavLink to="/dashboard/home" ><FaHome></FaHome>Student Home</NavLink></li>
                                <li><NavLink to="/dashboard/selectedClass" ><FaBook></FaBook> My Selected Class</NavLink></li>

                                <li><NavLink to="/dashboard/enrollClass" ><FaBookReader></FaBookReader> My Enrolled Classes</NavLink></li>

                            </>
                        }
                        <div className="divider"></div>
                        <li><Link to='/'><FaHome></FaHome>Home</Link></li>
                        <li><Link to="/menu"> <FaBars></FaBars>  MENU</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
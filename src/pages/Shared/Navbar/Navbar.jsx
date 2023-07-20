
import { Link } from "react-router-dom";
import siteLogo from '../../../assets/logo/musicSchool.jpg'
import useAuth from "../../../Hooks/UseAuth";
import DarkModeToggle from "react-dark-mode-toggle";
import { useState } from "react";
import useAdmin from "../../../Hooks/useAdmin";
import useInstructor from "../../../Hooks/useInstructor";

const Navbar = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [isDarkMode, setIsDarkMode] = useState(() => false);
    // console.log(isDarkMode);

    const { user, logOut } = useAuth();

    if (isDarkMode) {
        document.documentElement.classList.add('dark')
    }
    else (
        document.documentElement.classList.remove('dark')
    )



    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/instructors">Instructors</Link></li>
        <li> <Link to='/classes'>Classes</Link></li>
        {
            isAdmin? <li> <Link to="/dashboard/adminHome" >Dashboard</Link></li>:isInstructor?<li> <Link to="/dashboard/instructorHome" >Dashboard</Link></li>:<li> <Link to="/dashboard/studentHome" >Dashboard</Link></li>
        }

        {
            user ? <>
               
                <li><button onClick={logOut}>Log Out</button></li>
            </> : <> </>
        }

    </>
    return (

        <>

            <div className="navbar max-w-screen-xl fixed z-10 bg-opacity-30 text-white  bg-black ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                            {navOptions}

                        </ul>
                    </div>
                    <a className="avatar ">
                        <div className="w-12 rounded-xl">
                            <img src={siteLogo} />
                        </div>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}


                    </ul>
                </div>
                <div className="navbar-end">
                    <li className="mr-4"> <DarkModeToggle
                        onChange={setIsDarkMode}
                        checked={isDarkMode}
                        size={80}
                    /></li>

                    {
                        user ? <><div className="avatar">
                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL} />
                            </div>
                        </div></> : <Link to='/login' className="btn">login</Link>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;
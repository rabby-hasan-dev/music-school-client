
import { Link } from "react-router-dom";
import siteLogo from '../../../assets/logo/musicSchool.jpg'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const Navbar = () => {
 
    const { user, logOut}=useContext(AuthContext);

    


    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/instructors">Instructors</Link></li>
        <li> <Link to='/classes'>Classes</Link></li>
        <li> <Link to="/dashboard" >Dashboard</Link></li>
        {
            user?<li><button onClick={logOut}>Log Out</button></li>: <> </>
        }

    </>
    return (
        <>
            <div className="navbar max-w-screen-xl fixed z-10 bg-opacity-30  bg-black ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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
                    {
                        user? <><div className="avatar">
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
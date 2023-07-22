
import { useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../../Hooks/UseAuth";
import Swal from "sweetalert2";




const SocialLogin = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const { googleSignIn } = useAuth();
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const saveUsers = { name: loggedUser.displayName, email: loggedUser.email, }
                fetch('http://localhost:5000/allUsers', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUsers)

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {

                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'User SignUp Successfully',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }

                        navigate(from, { replace: true });
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <div className="divider  dark:text-slate-100  "></div>
            <div className="w-full text-center">
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                    <FaGoogle></FaGoogle>
                </button>

            </div>
            <div className="divider dark:text-slate-100 "></div>
        </div>
    );
};

export default SocialLogin;
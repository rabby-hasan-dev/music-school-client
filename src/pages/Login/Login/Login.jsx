import { Link, useLocation, useNavigate } from "react-router-dom";
import siteLogo from '../../../assets/logo/musicSchool.jpg'
import loginLogo from '../../../assets/login/login.jpg'
import { useForm } from "react-hook-form";

import useAuth from "../../../Hooks/UseAuth";
import Swal from "sweetalert2";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
const Login = () => {
    const { loginUser, } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)

        loginUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;

                console.log(loggedUser)

                Swal.fire({
                    title: 'User Login successful',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
                reset()
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
            })

    }


    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col  md:flex-row-reverse">

                    <div className="card md:w-1/2 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="flex flex-col">
                                <div className="avatar flex-col items-center">
                                    <div className="w-24 rounded-xl">
                                        <img src={siteLogo} />
                                    </div>
                                    <h2>Login into your account</h2>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)} >
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"   {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password", { required: true, minLength: 6, })} name="password" placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>

                                <div className="form-control mt-6">

                                    <input className="btn btn-primary" type="submit" value="Login" />
                                </div>

                            </form>
                            <div className="form-control mt-6">

                               <SocialLogin></SocialLogin>
                            </div>
                            <p> <small> New Here? <Link className='link' to='/signUp'>Create an Account</Link> </small></p>
                        </div>

                    </div>
                    <div className="text-center md:w-1/2 lg:text-left">
                        <img className="rounded-lg" src={loginLogo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
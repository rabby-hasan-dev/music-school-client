import { Link } from "react-router-dom";
import siteLogo from '../../../assets/logo/musicSchool.jpg'
import loginLogo from '../../../assets/login/login.jpg'
import { useForm } from "react-hook-form";
import { FaGoogle } from 'react-icons/fa';
const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)

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

                                <button className="btn "> <FaGoogle></FaGoogle> Google</button>
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
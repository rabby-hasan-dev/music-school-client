import siteLogo from '../../../assets/logo/musicSchool.jpg'
import signUpLogo from '../../../assets/login/signUp.jpg'
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from '../../../Hooks/UseAuth';
import Swal from 'sweetalert2';

const SignUp = () => {
    const { createUser, updateUserProfiles, } = useAuth();
    const navigate = useNavigate();


    const { register, handleSubmit, reset, formState: { errors }, watch } = useForm();
    const password = watch('password')
    const onSubmit = data => {
        
       
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;

                updateUserProfiles(data.name, data.photoURL)
                    .then(() => {

                        const saveUsers = { name: data.name, email: data.email, picture: data.photoURL }
                        fetch('https://music-shool-server.vercel.app/allUsers', {
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
                            })
                        reset()
                        navigate('/')

                    })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                console.log(error.message)
            })

    };

    return (
        <>

            <div className="hero min-h-screen bg-base-200 dark:shadow-slate-50  dark:text-gray-100 dark:bg-slate-900">
                <div className="hero-content flex-col lg:flex-row dark:shadow-slate-50  dark:text-gray-100 dark:bg-slate-900">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 dark:shadow-slate-50  dark:text-gray-100 dark:bg-slate-900">

                        <div className="card-body ">
                            <div className="flex flex-col">
                                <div className="avatar flex-col items-center">
                                    <div className="w-24 rounded-xl">
                                        <img src={siteLogo} />
                                    </div>
                                    <h2>Please Sign Up now!</h2>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}  >
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text dark:text-gray-100 dark:bg-slate-900">Name</span>
                                    </label>
                                    <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered dark:shadow-slate-50  dark:text-gray-100 dark:bg-slate-900" />
                                    {errors.name && <span className="text-red-600">Name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-gray-100 dark:bg-slate-900">Photo URL</span>
                                    </label>
                                    <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered dark:shadow-slate-50  dark:text-gray-100 dark:bg-slate-900" />
                                    {errors.photoURL && <span className="text-red-600 ">Photo URL is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-gray-100 dark:bg-slate-900 ">Phone Number</span>
                                    </label>
                                    <input type="text"  {...register("phone_number", { required: true })} placeholder="Your Phone Number" className="input input-bordered dark:shadow-slate-50  dark:text-gray-100 dark:bg-slate-900" />
                                    {errors.photoURL && <span className="text-red-600">Phone Number is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-gray-100 dark:bg-slate-900">Email</span>
                                    </label>
                                    <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered dark:shadow-slate-50  dark:text-gray-100 dark:bg-slate-900" />
                                    {errors.email && <span className="text-red-600 dark:text-gray-100 dark:bg-slate-900">Email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-gray-100 dark:bg-slate-900">Password</span>
                                    </label>
                                    <input type="password"  {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })} placeholder="password" className="input input-bordered dark:shadow-slate-50  dark:text-gray-100 dark:bg-slate-900" />
                                    {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                    {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text dark:text-gray-100 dark:bg-slate-900">Confirm Password</span>
                                    </label>
                                    <input type="password"  {...register(" confirm_password", {
                                        required: true,
                                        validate: (fieldValue) => password === fieldValue || 'password did not match',

                                    })} placeholder="Confirm Password" className="input input-bordered dark:shadow-slate-50  dark:text-gray-100 dark:bg-slate-900" />

                                    {errors?.confirm_password?.type === 'required' && <p className="text-red-600">Confirm Password id required</p>}

                                    {errors?.confirm_password?.type === 'validate' && <p className="text-red-600">Password is not match</p>}



                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary dark:shadow-slate-50  dark:text-gray-100 dark:bg-slate-900" type="submit" value="Sign Up" />
                                </div>
                            </form>
                            <p><small>Already have an account <Link to="/login">Login</Link></small></p>
                        </div>


                    </div>
                    <div className="text-center h-3/4 lg:text-left">
                        <img className='rounded-lg' src={signUpLogo} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;

import { useForm } from 'react-hook-form';

import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure ';
import useAuth from '../../../Hooks/UseAuth';
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom';
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const UpdateClass = () => {
    const updateClassData = useLoaderData();
    const navigate=useNavigate()
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();

    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        console.log(img_hosting_token)
        console.log(data);


        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {

                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, price, availableSeats, descriptions } = data;

                    const classItem = {
                        name, image: imgURL, instructor_name: user?.displayName, instructor_email: user?.email, price: parseFloat(price), available_seats: parseFloat(availableSeats), descriptions
                    }

                    console.log(classItem);


                    axiosSecure.patch(`/allClasses/${updateClassData?._id}`, classItem)
                        .then(data => {
                            console.log(data.data)

                            if (data.data.modifiedCount>0) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Class update successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
                navigate('/dashboard/myClasses')
            })

    };


    return (
        <div className="w-full px-10">
           
            <h2 className='text-center text-4xl my-4 text-red-600 uppercase'> Update Class</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='grid lg:grid-cols-2 gap-4'>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Class name</span>
                        </label>
                        <input type="text" defaultValue={updateClassData?.name} placeholder="Class name"
                            {...register("name", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Class Image</span>
                        </label>
                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                    </div>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor name</span>
                        </label>
                        <input type="text" readOnly defaultValue={user?.displayName} placeholder="Instructor name"
                            {...register("instructor_name ", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Email</span>
                        </label>
                        <input type="text" readOnly defaultValue={user?.email} placeholder="Instructor Email"
                            {...register("instructor_email ", { required: true, maxLength: 120 })}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price</span>
                        </label>
                        <input type="number" defaultValue={updateClassData?.price} {...register("price", { required: true })} placeholder="Type here Price" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Available seats</span>
                        </label>
                        <input type="number" defaultValue={updateClassData?.Available_seats} {...register("availableSeats", { required: true })} placeholder="Available seats" className="input input-bordered w-full " />
                    </div>

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Class Descriptions</span>
                    </label>
                    <textarea defaultValue={updateClassData?.descriptions} {...register("descriptions", { required: true })} className="textarea textarea-bordered h-24" placeholder="Descriptions"></textarea>
                </div>
                <div className="form-control">
                    <input className="btn  mt-4 " type="submit" value="Update Class" />
                </div>


            </form>
        </div>
    );
};

export default UpdateClass;
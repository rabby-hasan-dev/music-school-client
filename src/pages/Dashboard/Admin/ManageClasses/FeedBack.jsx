

import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure ';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';


const FeedBack = () => {
    const  [axiosSecure]=useAxiosSecure();
    const classData=useLoaderData();
  


    const { register, handleSubmit, } = useForm();


    const onSubmit = data => {
        const feedBack={feedBack:data.feedBack}
        axiosSecure.patch(`/allClasses/feedBack/${classData._id}`,feedBack)
        .then(data => {
            if (data.data.modifiedCount > 0) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Admin Send feedBack successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })




    };


    return (
        <div className="w-full px-10">

            <h2 className='text-center text-4xl my-10 text-red-600 '>FeedBack  Class</h2>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control">

                    <textarea {...register("feedBack", { required: true })} className="textarea textarea-bordered h-24" placeholder="FeedBack"></textarea>
                </div>

                <div className="form-control">
                    <input className="btn  mt-4 " type="submit" value=" Send FeedBack" />
                </div>


            </form>
        </div>
    );
};

export default FeedBack;




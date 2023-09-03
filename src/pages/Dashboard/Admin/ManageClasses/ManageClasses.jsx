
import useAxiosSecure from "../../../../Hooks/useAxiosSecure ";
import Swal from "sweetalert2";
import UseClasses from "../../../../Hooks/UseClasses";
import { Link } from "react-router-dom";




const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const [classes, , refetch] = UseClasses();


    const handleApproved = (id) => {
        axiosSecure.patch(`/allClasses/approved/${id}`)
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    refetch();

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Admin Approved successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleDeny = (id) => {
        axiosSecure.patch(`/allClasses/deny/${id}`)
            .then(data => {
                if (data.data.modifiedCount > 0) {
                    refetch();

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Admin Deny successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    return (
        <div className="w-full mx-10">


            <div className="uppercase  font-semi-bold h-[60] flex justify-evenly items-center">

                <h3 className="text-3xl">Total Class :{classes.length}</h3>

            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Picture</th>
                            <th>Class Name</th>
                            <th> Instructor Name</th>
                            <th> Instructor Email</th>
                            <th>  Available seats</th>
                            <th> Price</th>

                            <th>Status</th>
                            <th>Action</th>
                            <th>FeedBack</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            classes.map((classItem, index) => <tr
                                key={classItem._id}
                            >
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={classItem.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {classItem?.name}
                                </td>
                                <td>
                                    {classItem?.instructor_name}
                                </td>
                                <td>
                                    {classItem?.instructor_email}
                                </td>
                                <td>{classItem?.available_seats}</td>
                                <td>${classItem?.price}</td>
                                <td>{classItem?.status}</td>
                                <td>

                                    <div className="btn-group btn-group-vertical  ">

                                        <button onClick={() => handleApproved(classItem._id)} className="btn btn-sm   ">approved</button>

                                        <button onClick={() => handleDeny(classItem._id)} className="btn btn-sm">Deny</button>

                                    </div>

                                </td>
                                <td>
                                    <Link to={`/dashboard/feedBack/${classItem._id}`}>
                                        <button className="btn btn-sm">Send feedBack</button>
                                    </Link>

                                </td>

                            </tr>)
                        }




                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageClasses;
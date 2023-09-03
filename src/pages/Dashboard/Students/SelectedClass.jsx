import useSelectedClass from "../../../Hooks/useSelectedClass";
import { FaTrashAlt } from 'react-icons/fa';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const SelectedClass = () => {
    const [selectedClass,refetch]=useSelectedClass();
    const total = selectedClass.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://music-shool-server.vercel.app/selectedClass/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })


            }
        })

    }

    return (
        <div className="w-full">
            
            <div className="uppercase  font-semi-bold h-[60] flex justify-evenly items-center">
                <h3 className="text-3xl">total selected Class :{selectedClass.length}</h3>
                <h3 className="text-3xl">Total Price :{total}</h3>
               
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Picture</th>
                            <th>Class Name</th>
                            <th> Price</th>
                            <th>payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            selectedClass.map((classItem, index) => <tr
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
                                    {classItem.name}
                                </td>
                                <td>${classItem.price}</td>
                                <td> <Link to={`/dashboard/payment/${classItem?._id}`} ><button className="btn btn-warning btn-sm">Pay</button></Link></td>
                                <td>
                                    <button onClick={() => handleDelete(classItem._id)} className="btn btn-ghost bg-red-600 text-white  "><FaTrashAlt></FaTrashAlt> </button>
                                </td>
                            </tr>)
                        }




                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default SelectedClass;
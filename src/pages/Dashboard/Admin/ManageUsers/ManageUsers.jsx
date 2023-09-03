

import { useQuery } from '@tanstack/react-query';


import { FaTrashAlt, FaUserShield, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure ';



const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/allUsers')
        return res.data;
    });






    const handleMakeAdmin = (user) => {

        fetch(`https://music-shool-server.vercel.app/allUsers/admin/${user._id}`, {
            method: 'PATCH',

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                   
                }
            })

    }
    const handleMakeInstructor = (user) => {

        fetch(`https://music-shool-server.vercel.app/allUsers/instructor/${user._id}`, {
            method: 'PATCH',

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                   
                }
            })

    }

    const handleDelete = (user) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be delete this users!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://music-shool-server.vercel.app/allUsers/${user._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your users has been deleted.',
                                'success'
                            )
                          
                        }
                    })

            }
        })




    }


    return (
        <div className='w-full mx-10'>

            <h3 className="text-3xl font-semibold">Total Users :{users.length}</h3>
            <div>
                <div className="overflow-x-auto">
                    <table className="table ">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Make Admin</th>
                                <th>Make Instructor</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr
                                    key={user._id}
                                >
                                    <th>{index + 1}</th>
                                    <th>{user.name}</th>
                                    <td>{user.email}</td>
                                    <td>

                                        {
                                            user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-orange-400 text-white "><FaUserShield></FaUserShield></button>
                                        }

                                    </td>
                                    <td>

                                        {
                                            user.role === 'instructor' ? 'Instructor' : <button onClick={() => handleMakeInstructor(user)} className="btn btn-ghost bg-orange-400 text-white "><FaUserShield></FaUserShield></button>
                                        }

                                    </td>
                                    <td><button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600 text-white"><FaTrashAlt></FaTrashAlt></button></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;
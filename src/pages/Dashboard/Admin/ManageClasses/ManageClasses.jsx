import { useEffect, useState } from "react";



const ManageClasses = () => {

    const [classes, setClasses] = useState([])
    // console.log(classess);

    useEffect(() => {
        fetch('http://localhost:5000/allClasses')
            .then(res => res.json())
            .then(data => {
                setClasses(data)
            })
    }, [])
    return (
        <div className="w-full">


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
                                    {classItem.name}
                                </td>
                                <td>
                                    {classItem?.instructor?.name}
                                </td>
                                <td>
                                    {classItem?.instructor?.email}
                                </td>
                                <td>{classItem.available_seats}</td>
                                <td>${classItem.price}</td>
                                <td>pending,approved,denied</td>
                                <td>
                                    <div className="btn-group btn-group-vertical">
                                        <button className="btn btn-sm">pending</button>
                                        <button className="btn btn-sm">approved</button>
                                        <button className="btn btn-sm">denied</button>
                                    </div>
                                    
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
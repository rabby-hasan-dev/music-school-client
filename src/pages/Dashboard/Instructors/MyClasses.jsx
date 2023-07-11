import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/UseAuth";
import { Link } from "react-router-dom";

const MyClasses = () => {
    const { user } = useAuth();
    const [userClasses, setUserClasses] = useState([]);
    console.log(userClasses);

    useEffect(() => {
        fetch(`http://localhost:5000/allClasses?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setUserClasses(data))

    }, [])
    return (
        <div className="w-full">


            <div className="uppercase  font-semi-bold h-[60] flex justify-evenly items-center">

                <h3 className="text-3xl">Total Class :{userClasses.length}</h3>

            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Picture</th>
                            <th>Class Name</th>
                            <th>  Available seats</th>
                            <th> Price</th>
                            <th> Total Enroll</th>
                            <th>Status</th>
                            <th >Action</th>
                            <th>Feedback </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            userClasses.map((classItem, index) => <tr
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


                                <td className="text-center">{classItem.available_seats}</td>
                                <td>${classItem.price}</td>
                                <td className="text-center">{userClasses.length}</td>
                                <td>{classItem.status}</td>
                                <td>
                                    <Link to={`/dashboard/updateClass/${classItem._id}`}> <button className="btn btn-sm">Update</button></Link>
                                </td>
                                <td>
                                    <button className="btn btn-sm">Feedback</button>
                                </td>

                            </tr>)
                        }




                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyClasses;
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";
import useSelectedClass from "../../Hooks/useSelectedClass";
import { useState } from "react";
import useInstructor from "../../Hooks/useInstructor";
import useAdmin from "../../Hooks/useAdmin";
import UseAllInstructors from "../../Hooks/UseAllInstructors";


const Card = ({ classes }) => {
    const [isAdmin,] = useAdmin();
    const [isInstructor,] = useInstructor()
    const { _id, name, image, price, available_seats, instructor_name, instructor_email, } = classes;
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useSelectedClass()
    const [disabled] = useState(true);


    const { user } = useAuth();
    const handleSelectedClass = (classItem) => {

        if (user && user?.email) {
            const selectedClass = { classId: _id, name, image, price, email: user.email, instructor_email }

            fetch('http://localhost:5000/selectedClass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()

                        // refetch and update cart item number
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class Added in my class ',
                            showConfirmButton: false,
                            timer: 1500
                        })

                    }

                })

        }

        else {
            Swal.fire({
                title: 'Please Login now?',
                text: "User Login successfully!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl dark:shadow-slate-50  dark:text-gray-100 dark:bg-slate-900">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body ">
                    <h2 className="card-title">{name}</h2>
                    <p> Price:{price}</p>
                    <p> Available_seats:{available_seats}</p>
                    <div className="divider"></div>
                    <h2 className="text-2xl">Instructor: {instructor_name}</h2>
                    <p>Email:{instructor_email}</p>
                    <div className="card-actions justify-end">
                        <button disabled={isAdmin ? disabled : isInstructor ? disabled : available_seats == 0 ? disabled : null} onClick={() => handleSelectedClass(classes)} className="btn">Select Class</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
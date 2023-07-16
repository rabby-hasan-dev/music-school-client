import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Instructors = () => {
    const [instructors, setInstructors] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allInstructors')
            .then(res => res.json())
            .then(data => {
                setInstructors(data)
            })
    }, [])
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

            {
                instructors.map(instructor => <> <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={instructor.picture
                    } alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{instructor.name}</h2>
                        <p>{instructor.email}</p>
                       
                        <div className="card-actions justify-end">
                          <Link to="/instructorsClasses">
                          <button className="btn ">See more information</button>
                          </Link>
                        </div>
                    </div>
                </div></>)
            }



        </div>
    );
};

export default Instructors;
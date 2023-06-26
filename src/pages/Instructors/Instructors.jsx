import { useEffect, useState } from "react";

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
        <div className="grid grid-cols-3 gap-4">

            {
                instructors.map(instructor => <> <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={instructor.picture
                    } alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{instructor.name}</h2>
                        <p>{instructor.email}</p>
                        <p> Number of Classes taken:{instructor.total_class
                        }</p>
                        <div className="card-actions justify-end">
                            <button className="btn ">See more information</button>
                        </div>
                    </div>
                </div></>)
            }



        </div>
    );
};

export default Instructors;
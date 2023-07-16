import { useEffect, useState } from "react";
import InsCard from "./InsCard";

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
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-4 ">

            {
                instructors.map(instructor => <InsCard
                    key={instructor._id}
                    instructor={instructor}
                ></InsCard>)
            }



        </div>
    );
};

export default Instructors;
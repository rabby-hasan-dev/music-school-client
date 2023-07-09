import { useEffect, useState } from "react";
import useAuth from "../../../../Hooks/UseAuth";
import ClassCard from "./classCard";



const EnrollClasses = () => {
    const {user}=useAuth();
    const [classData, setClassData]=useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/payments?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setClassData(data);
            console.log(data);
        })
    },[])
    return (
        <div className="w-full ml-10">
            <h2 className="text-4xl  mb-12">Welcome Back <span className="text-red-600">{user?.displayName}</span >, Ready For Your Next Lesson?</h2>
          <div className="grid  lg:grid-cols-2 gap-4">
          {
              classData.map(data=> <ClassCard
              key={data._id}
              data={data}
              ></ClassCard>)
            }
          </div>
        </div>
    );
};

export default EnrollClasses;
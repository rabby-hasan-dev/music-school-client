import { useEffect, useState } from "react";
import Card from "../Card";


const Classes = () => {
    const [classess, setClassess] = useState([])
    // console.log(classess);

    useEffect(() => {
        fetch('http://localhost:5000/allClasses')
            .then(res => res.json())
            .then(data => {
                setClassess(data)
            })
    }, [])
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                classess.map(classes => <Card
                    key={classes._id}
                    classes={classes}
                ></Card>)
            }
        </div>
    );
};

export default Classes;
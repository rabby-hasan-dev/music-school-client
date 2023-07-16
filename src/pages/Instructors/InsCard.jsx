import { Link } from "react-router-dom";


const InsCard = ({instructor}) => {
    return (
        <>
                
        <div className="card w-96 bg-base-100 shadow-xl">
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
        </div></>
    );
};

export default InsCard;
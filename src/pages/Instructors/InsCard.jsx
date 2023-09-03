import { Link } from "react-router-dom";


const InsCard = ({ instructor }) => {
    return (
        <div className="mt-24">

            <div className="card lg:w-96 bg-base-100 shadow-xl dark:shadow-slate-50  dark:text-gray-100 dark:bg-slate-900">
                <figure><img src={instructor?.picture
                } alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{instructor?.name}</h2>
                    <p>{instructor?.email}</p>
                    <p> Total Student:{instructor?.total_enroll_students}</p>

                    <div className="card-actions justify-end">
                        {/* <Link to="/instructorsClasses">
                            <button className="btn ">See more information</button>
                        </Link> */}

                        <button className="btn ">See more information</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default InsCard;
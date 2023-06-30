
const Card = ({ classes }) => {
    const { name, image, price, available_seats, instructor_name, instructor_email, descriptions } = classes;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p> Price:{price}</p>
                    <p> Available_seats:{available_seats}</p>
                    <div className="divider"></div>
                    <h2 className="text-2xl">Instructor: {instructor_name}</h2>
                    <p>Email:{instructor_email}</p>
                    <div className="card-actions justify-end">
                        <button className="btn">Select Class</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
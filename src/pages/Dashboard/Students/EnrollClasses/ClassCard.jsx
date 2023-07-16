import siteLogo from '../../../../assets/logo/musicSchool.jpg'

const ClassCard = ({ data }) => {
    const {  email,  } = data;
    return (
        <div className="card card-side bg-base-100 shadow-2xl">
            <figure><img src={siteLogo} alt="picture" /></figure>
            <div className="card-body">
                <h2 className="card-title">Your Enroll Class</h2>
                <p>Complete instrument class With Instructor</p>
                <p>{email }</p>
                <div className="card-actions justify-end">
                    <button className="btn ">Continue Class</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;
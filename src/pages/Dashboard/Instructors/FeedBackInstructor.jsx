import { useParams } from "react-router-dom";

const FeedBackInstructor = () => {
    const insFeedBack=useParams();
    console.log(insFeedBack)
   
   
    return (
        <div>
          <p></p>
        </div>
    );
};

export default FeedBackInstructor;
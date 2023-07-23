
import InsCard from "./InsCard";
import UseAllInstructors from "../../Hooks/UseAllInstructors";

const Instructors = () => {
    const [instructors]=UseAllInstructors();
    return (
        <div className="grid   md:grid-cols-2 lg:grid-cols-3 gap-4 ">

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
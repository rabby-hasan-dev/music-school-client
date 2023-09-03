
import InsCard from "./InsCard";
import UseAllInstructors from "../../Hooks/UseAllInstructors";

const Instructors = () => {
    const [instructors]=UseAllInstructors();
    return (
        <div className="grid   lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center items-end mb-10">

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
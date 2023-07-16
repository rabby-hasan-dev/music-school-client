
import useAuth from "../../../../Hooks/UseAuth";
import ClassCard from "./classCard";
import UsePayments from "../../../../Hooks/UsePayments";



const EnrollClasses = () => {
    const payments = UsePayments();
    const { user } = useAuth();




    return (
        <div className="w-full ml-10">
            <h2 className="text-4xl  mb-12">Welcome Back <span className="text-red-600">{user?.displayName}</span >, Ready For Your Next Lesson?</h2>
            <div className="grid  lg:grid-cols-2 gap-4">
                {
                    payments.map(data => <ClassCard
                        key={data._id}
                        data={data}
                    ></ClassCard>)
                }
            </div>
        </div>
    );
};

export default EnrollClasses;
import { Link } from "react-router-dom";
import UseClasses from "../../../Hooks/UseClasses";





const PopularClasses = () => {

    const [classes] = UseClasses();
    const popularClasses = classes.filter(pClasses => pClasses?.total_enroll >=1);





    return (
        <div  className="my-12 ">

            <h2 className="text-5xl text-bold text-center mb-16 uppercase ">Popular Class</h2>
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center items-end ">
                {
                    popularClasses.map((popularClass) => <div
                        key={popularClass?._id}
                    >
                        <div className="card lg:w-96 bg-base-100 shadow-xl dark:shadow-slate-50  dark:text-gray-100 dark:bg-slate-900">
                            <figure><img className=" w-[356px] h-[250px]" src={popularClass?.image} alt="Picture" /></figure>
                            <div className="card-body ">
                                <h2 className="card-title">{popularClass?.name}</h2>
                                <h2 className="text-2xl">Instructor: {popularClass?.instructor_name}</h2>

                                <div className="card-actions justify-end">
                                    <Link to='/classes'>
                                        <button className="btn">Select Class</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;
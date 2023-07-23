import React from 'react';
import UseAllInstructors from '../../../Hooks/UseAllInstructors';
import InsCard from '../../Instructors/InsCard';

const PopularInstructors = () => {
    const [instructors] = UseAllInstructors();
    const popularInstructors = instructors.filter(tS => tS.total_enroll_students > 0);

    return (
        <div >
            <h2 className="text-6xl text-bold text-center my-8 uppercase">Popular Instructors</h2>
            <div className="grid lg:grid-cols-3 gap-4">
                {
                    popularInstructors.map(instructor => <div
                        key={instructor?._id}>

                        <div className="card w-96 bg-base-100 shadow-xl dark:shadow-slate-50  dark:text-gray-100 dark:bg-slate-900">
                            <figure><img src={instructor?.picture
                            } alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{instructor?.name}</h2>
                                <p>{instructor?.email}</p>
                                <p> Total Student:{instructor?.total_enroll_students}</p>

                                <div className="card-actions justify-end">
                                    <button className="btn ">See more information</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }

            </div>


        </div>
    );
};

export default PopularInstructors;



import UseClasses from "../../../Hooks/UseClasses";
import Card from "../Card";



const Classes = () => {
    const [classes, loading, refetch] =UseClasses();
 
  
    return (
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 dark:text-gray-100 dark:bg-slate-900  justify-items-center items-end mb-10">
            
            {
                classes.map(classes => <Card
                    key={classes._id}
                    classes={classes}
                ></Card>)
            }
        </div>
    );
};

export default Classes;
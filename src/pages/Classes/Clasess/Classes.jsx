
import Card from "../Card";
import UseClasses from "../../../Hooks/UseClasses";


const Classes = () => {
    const [classes, loading, refetch] = UseClasses()
  
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            
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
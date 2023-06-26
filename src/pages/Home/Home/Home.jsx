import Banner from "../Banner/Banner";
import Services from "../ExtraSection/services";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstrucors/PopularInstructors";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Services></Services>
        </div>
    );
};

export default Home;
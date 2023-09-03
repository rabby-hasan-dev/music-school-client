import Banner from "../Banner/Banner";
import Services from "../ExtraSection/services";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstrucors/PopularInstructors";
import Testimonials from "../Testimonials/Testimonials";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Services></Services>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
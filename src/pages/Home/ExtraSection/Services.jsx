import gitar1 from '../../../assets/services/gitar.jpg'
import gitar2 from '../../../assets/services/gitar1.jpg'
const Services = () => {
    return (
        <div className='grid lg:grid-cols-2 gap-4  m-20 '>
            <div>
                <h2 className="text-4xl">ART OF MUSIC</h2>
                <p className="text-xl my-2">Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi acc umsan ipsum</p>
                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibend um auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio site amet nibh vulputate.</p>
                <button className="btn mt-3">Red More</button>
            </div>
            <div className='grid grid-cols-2 gap-6' >
                <img  src={gitar1} alt="" />
                <img src={gitar2} alt="" />
            </div>
        </div>
    );
};

export default Services;
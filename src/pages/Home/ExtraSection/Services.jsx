import gitar1 from '../../../assets/services/gitar.jpg'
import gitar2 from '../../../assets/services/gitar1.jpg'
import photoGallery1 from '../../../assets/PhotoGallery/galary (1).jpg'
import photoGallery2 from '../../../assets/PhotoGallery/galary (2).jpg'
import photoGallery3 from '../../../assets/PhotoGallery/galary (3).jpg'
import photoGallery4 from '../../../assets/PhotoGallery/galary (4).jpg'
import photoGallery5 from '../../../assets/PhotoGallery/galary (5).jpg'
import photoGallery6 from '../../../assets/PhotoGallery/galary (6).jpg'
import photoGallery7 from '../../../assets/PhotoGallery/galary (7).jpg'
import photoGallery8 from '../../../assets/PhotoGallery/galary (8).jpg'
import photoGallery9 from '../../../assets/PhotoGallery/galary (10).jpg'
const Services = () => {
    return (
        <div >
           <div className='grid lg:grid-cols-2 gap-4  m-20 '>
           <div>
                <h2 className="text-6xl">ART OF MUSIC</h2>
                <p className="text-2xl my-2">Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi acc umsan ipsum</p>
                <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibend um auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio site amet nibh vulputate.</p>
                <button className="btn mt-3">Red More</button>
            </div>
            <div className='grid grid-cols-2 gap-6' >
                <img  src={gitar1} alt="" />
                <img src={gitar2} alt="" />
            </div>
           </div>
           <div>
            <h2 className='text-5xl uppercase text-center my-20'>Photo Gallery</h2>
            <div className='grid grid-cols-3 gap-4'>
                <img className='hover:scale-125 transition duration-500 cursor-pointer hover:rounded-lg' src={photoGallery1} alt="photo_Gallery" />
                <img className='hover:scale-125 transition duration-500 cursor-pointer hover:rounded-lg' src={photoGallery2} alt="photo_Gallery" />
                <img className='hover:scale-125 transition duration-500 cursor-pointer hover:rounded-lg' src={photoGallery3} alt="photo_Gallery" />
                <img className='hover:scale-125 transition duration-500 cursor-pointer hover:rounded-lg' src={photoGallery4} alt="photo_Gallery" />
                <img className='hover:scale-125 transition duration-500 cursor-pointer hover:rounded-lg' src={photoGallery5} alt="photo_Gallery" />
                <img className='hover:scale-125 transition duration-500 cursor-pointer hover:rounded-lg' src={photoGallery6} alt="photo_Gallery" />
                <img className='hover:scale-125 transition duration-500 cursor-pointer hover:rounded-lg' src={photoGallery7} alt="photo_Gallery" />
                <img className='hover:scale-125 transition duration-500 cursor-pointer hover:rounded-lg' src={photoGallery8} alt="photo_Gallery" />
                <img className='hover:scale-125 transition duration-500 cursor-pointer hover:rounded-lg' src={photoGallery9} alt="photo_Gallery" />
            </div>
           </div>
        </div>
    );
};

export default Services;
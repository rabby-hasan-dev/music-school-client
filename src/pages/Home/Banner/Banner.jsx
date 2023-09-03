import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";

import banner1 from '../../../assets/Banner/banner (1).jpg'
import banner2 from '../../../assets/Banner/banner (2).jpg'
import banner3 from '../../../assets/Banner/banner (3).jpg'
import banner4 from '../../../assets/Banner/banner (4).jpg'
import banner5 from '../../../assets/Banner/banner (5).jpg'
import banner6 from '../../../assets/Banner/banner (6).jpg'


const Banner = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={banner2} alt="banner" />
          <div className=" text-white absolute top-0 md:top-1/4  lg:top-1/4 xl:top-1/4 lg:bottom-1/4 left-0 md:left-10 lg:left-1/4 xl:left-1/4   p-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="xl:my-20">
              <h1 className="text-4xl uppercase font-bold my-3">Well Come to our Music School</h1>
              <p className="text-lg">Our institute for music lover people. Who can know music instrument in depth .<br /> Everyone Welcome for learning music instrument class..</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner1} alt="banner" />
          <div className=" text-white absolute top-0 md:top-1/4  lg:top-1/4 xl:top-1/4 lg:bottom-1/4 left-0 md:left-10 lg:left-1/4 xl:left-1/4   p-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="xl:my-20">
              <h1 className="text-4xl uppercase font-bold my-3">Well Come to our Music School</h1>
              <p className="text-lg">Our institute for music lover people. Who can know music instrument in depth .<br /> Everyone Welcome for learning music instrument class..</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt="banner" />
          <div className=" text-white absolute top-0 md:top-1/4  lg:top-1/4 xl:top-1/4 lg:bottom-1/4 left-0 md:left-10 lg:left-1/4 xl:left-1/4   p-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="xl:my-20">
              <h1 className="text-4xl uppercase font-bold my-3">Well Come to our Music School</h1>
              <p className="text-lg">Our institute for music lover people. Who can know music instrument in depth .<br /> Everyone Welcome for learning music instrument class..</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner4} alt="banner" />
          <div className=" text-white absolute top-0 md:top-1/4  lg:top-1/4 xl:top-1/4 lg:bottom-1/4 left-0 md:left-10 lg:left-1/4 xl:left-1/4   p-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="xl:my-20">
              <h1 className="text-4xl uppercase font-bold my-3">Well Come to our Music School</h1>
              <p className="text-lg">Our institute for music lover people. Who can know music instrument in depth .<br /> Everyone Welcome for learning music instrument class..</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner5} alt="banner" />
          <div className=" text-white absolute top-0 md:top-1/4  lg:top-1/4 xl:top-1/4 lg:bottom-1/4 left-0 md:left-10 lg:left-1/4 xl:left-1/4   p-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="xl:my-20">
              <h1 className="text-4xl uppercase font-bold my-3">Well Come to our Music School</h1>
              <p className="text-lg">Our institute for music lover people. Who can know music instrument in depth .<br /> Everyone Welcome for learning music instrument class..</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner6} alt="banner" />
          <div className=" text-white absolute top-0 md:top-1/4  lg:top-1/4 xl:top-1/4 lg:bottom-1/4 left-0 md:left-10 lg:left-1/4 xl:left-1/4   p-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="xl:my-20">
              <h1 className="text-4xl uppercase font-bold my-3">Well Come to our Music School</h1>
              <p className="text-lg">Our institute for music lover people. Who can know music instrument in depth .<br /> Everyone Welcome for learning music instrument class..</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
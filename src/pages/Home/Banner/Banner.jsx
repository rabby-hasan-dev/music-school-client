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
        <SwiperSlide><img src={banner2} alt="banner" /></SwiperSlide>
        <SwiperSlide><img src={banner1} alt="banner" /></SwiperSlide>
        <SwiperSlide><img src={banner3} alt="banner" /></SwiperSlide>
        <SwiperSlide><img src={banner4} alt="banner" /></SwiperSlide>
        <SwiperSlide><img src={banner5} alt="banner" /></SwiperSlide>
        <SwiperSlide><img src={banner6} alt="banner" /></SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
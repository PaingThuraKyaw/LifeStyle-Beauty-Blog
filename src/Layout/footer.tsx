import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Footer = () => {
  return (
    <div className=" bg-black/5 pt-10 p-[1.5rem] md:px-[5rem]">
      <h3 className=" font-bold text-center text-2xl">
        Follow my lifestyle daily on Instagram and join 100k others.
      </h3>
      <p className=" mt-3 text-center text-black/80">
        @ thestyledlife / #thestyledlife
      </p>

      <div className=" mt-5">
        <Swiper
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <img src="./beauty3.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./lifestyle2.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./beauty7.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./beauty1.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./beauty2.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./lifestyle1.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Footer;

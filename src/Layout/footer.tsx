import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link, useLocation } from "react-router-dom";
import { BookUser, Phone, Send } from "lucide-react";

const Footer = () => {
  const { pathname } = useLocation();

  const name = pathname === "/" ? "home" : pathname;

  const handlerTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className=" bg-black/5 py-20  p-[1.5rem] md:px-[5rem]">
        <h3 className=" font-bold text-center text-2xl">
          Follow my lifestyle daily on Instagram and join look others.
        </h3>
        <p className=" mt-3 text-center text-black/80">@paing_thura_kyaw</p>

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
      <div className=" p-[1.5rem] pt-10 md:px-[5rem] bg-white">
        <div className=" grid grid-cols-12 md:gap-10">
          <div className=" pb-4 md:pb-0 md:border-0 border-b col-span-12 md:col-span-4 ">
            <h3 className=" text-lg space-x-2">
              <Link className=" space-x-2" to={"/"}>
                <span className=" md:tracking-[0.2rem] ">THE</span>
                <span className=" md:tracking-[0.2rem] text-shadow font-bold ">
                  STYLEDLIF
                </span>
              </Link>
            </h3>
            <p className=" py-2 w-2/3 text-zinc-500 text-sm">
              Get inspired! Receive discounts, tips and behind the scenes
              stories.
            </p>
            <div className=" mt-2 space-x-3 flex items-center">
              <Phone size={16} />
              <p className=" text-zinc-500">09 662766003</p>
            </div>
            <div className=" mt-2 space-x-3 flex items-center">
              <BookUser size={16} />
              <p className=" text-zinc-500">
                No.55 , Bo Son Pat st , Downbon Township
              </p>
            </div>
            <div className=" mt-2 space-x-3 flex items-center">
              <Send size={16} />
              <p className=" text-zinc-500">kyawna2265@gmail.com</p>
            </div>
          </div>
          <div className=" hidden md:block md:mx-auto col-span-12 md:col-span-4">
            <div className=" mt-5 flex flex-col space-y-3">
              <Link
                className={`${
                  name === "home" ? " text-black/60 opacity-60 font-bold" : ""
                }`}
                onClick={handlerTop}
                to={"/"}
              >
                Home
              </Link>
              <Link
                className={`${
                  name === "/about" ? " text-black/60 opacity-60 font-bold" : ""
                }`}
                onClick={handlerTop}
                to={"/about"}
              >
                About
              </Link>
              <Link
                className={`${
                  name === "/blog" ? " text-black/60 opacity-60 font-bold" : ""
                }`}
                onClick={handlerTop}
                to={"/blog"}
              >
                Blog
              </Link>
              <Link
                className={`${
                  name === "/contact"
                    ? " text-black/60 opacity-60 font-bold"
                    : ""
                }`}
                onClick={handlerTop}
                to={"/contact"}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className=" pt-5 col-span-12 md:col-span-4">
            <h5 className=" text-xl font-semibold">
              Subscribe to our newletter
            </h5>
            <form className=" mt-4 bg-black/5 px-2 rounded-full my-2 w-[300px] flex items-center">
              <input
                placeholder="Your Email"
                className=" border-none text-sm text-slate-700 bg-transparent focus:outline-none px-3 w-[200px]"
                type="text"
              />
              <button className=" px-4 py-[7px] bg-yellow text-white rounded-full">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

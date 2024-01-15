import React from "react";
import { heroBanners } from "../assets/carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Hero = () => {
  return (
    <section className="w-full">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {heroBanners.map((banner, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className="flex bg-no-repeat bg-cover bg-center h-[600px] items-center lg:pl-[216px] px-[80px]"
                style={{
                  backgroundImage:
                    "url(https://s3-alpha-sig.figma.com/img/14e6/e760/5232589c29df6632ef8cd49b1babdddd?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PHF0gX9OWo7RlJYdfKwxW3KLmLKLyLNV-Yjh46ICXROg8cY73nmmYZ6YgXacJWBdjYSK6qe0aOZadG-JSel9x8RY0wFxuYki16bW52qCx9XIfxXutCsmEjjP6S667nfPbP-G0pZuXyPV5wXaq7xLw8vkzZ38TJ6XKehall0RlEtmQt61Uh5Stz2-caCdMnPoHwwpMzZbWRK4YAP3Lj8l6gh5vQB2keyEqxtXraYYqjqISFUGyTFl3P9SrblGSpZwSq~w9yjBvUUn6Lyai~vdzOgoOjm3Hj5We~JjyWmd-RFzQJWkcyBtwfedYLv4iVOG3ZWxNpIwSpZ2xCHIYJ34nQ__)",
                }}
              >
                <div className="inline-flex text-white flex-col items-start gap-y-[29px] lg:w-[565px] lg:h-[293px]">
                  <h1 className="text-3xl md:text-4xl font-bold uppercase">
                    {banner.title}
                  </h1>
                  <p className="text-base md:text-lg font-medium">
                    {banner.description}
                  </p>

                  <button className="flex py-[12px] px-[18px] justify-center text-center gap-[10px] rounded bg-[#12B1BE] text-white">
                    Know More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Hero;

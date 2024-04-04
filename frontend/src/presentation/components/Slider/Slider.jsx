import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img
            src="../../../../src/presentation/assets/imgSlider1.jpg"
            alt="Playa de San Juan de la Arena"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../../../../src/presentation/assets/imgSlider2.jpg"
            alt="Playa de San Juan de la Arena"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../../../../src/presentation/assets/imgSlider3.jpg"
            alt="Playa de San Juan de la Arena"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.css";

import foto1 from "../../../../src/presentation/assets/img/imgSlider1.jpg";
import foto2 from "../../../../src/presentation/assets/img/imgSlider2.jpg";
import foto3 from "../../../../src/presentation/assets/img/imgSlider3.jpg";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <div className="relative">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="sliderContainer"
      >
        <SwiperSlide>
          <img
            src= {foto1}
            alt="Playa de San Juan de la Arena"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={foto2}
            alt="Playa de San Juan de la Arena"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={foto3}
            alt="Playa de San Juan de la Arena"
          />
        </SwiperSlide>
      </Swiper>
      <h1 className="sliderTitle">
        ASOCIACIÓN <br /> CULTURAL ARENESCA <br /> DE FESTEJOS
      </h1>
    </div>
  );
}

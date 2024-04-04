import SwiperCore, { Navigation, Pagination, Scrollbar, Swiper } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Navigation, Pagination, Scrollbar]);

export default function Slider() {
  return (
    <Swiper
      spaceBetween={50} // Optional: Spacing between slides (in pixels)
      slidesPerView={1} // Optional: Number of slides to show at a time
      navigation={true} // Optional: Enable navigation arrows
      pagination={{ clickable: true }} // Optional: Enable pagination dots
      scrollbar={{ draggable: true }} // Optional: Enable scrollbar
    >
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img
            src="../../../../src/presentation/assets/imgSlider1.jpg"
            alt="Playa San Juan de la Arena"
          />
        </div>
        <div className="swiper-slide">
          <img
            src="../../../../src/presentation/assets/imgSlider2.jpg"
            alt="Playa San Juan de la Arena"
          />
        </div>
        <div className="swiper-slide">
          <img
            src="../../../../src/presentation/assets/imgSlider3.jpg"
            alt="Playa San Juan de la Arena"
          />
        </div>
        {/* ... */}
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-scrollbar"></div>
    </Swiper>
  );
}

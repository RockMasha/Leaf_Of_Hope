import Swiper from "swiper/bundle";
import "swiper/css";
import "swiper/css/bundle";

export const swiper = {};
if (window.innerWidth < 1440) {
  swiper.data = new Swiper(".swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    centeredSlides: true,
    breakpoints: {
      320: {
        spaceBetween: 50,
      },
      768: {
        spaceBetween: 90,
      },
    },
  });
}

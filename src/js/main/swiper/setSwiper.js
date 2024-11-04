import Swiper from "swiper";
import { swiper } from "./swiper";

export function setSwiper() {
  if (!swiper.data) {
    swiper.data = new Swiper(".swiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      centeredSlides: true,
      breakpoints: {
        320: {
          spaceBetween: "50px",
        },
        768: {
          spaceBetween: "90px",
        },
      },
    });
  }
}

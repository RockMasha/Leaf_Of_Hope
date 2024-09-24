import Swiper from "swiper/bundle";
import "swiper/css";
import "swiper/css/bundle";

if (window.innerWidth < 1440) {
  const swiper = new Swiper(".swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

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

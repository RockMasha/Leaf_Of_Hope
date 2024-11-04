import { swiper } from "./swiper";

export function removeSwiper() {
  if (swiper.data) {
    swiper.data.destroy(true, true);
    swiper.data = null;
  }
}

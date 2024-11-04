import { removeSwiper } from "./removeSwiper";
import { setSwiper } from "./setSwiper";

let isDesktop = window.innerWidth >= 1440;
export function resizeSwiper() {
  const isCurrentDesktop = window.innerWidth >= 1440;
  const isToDesktop = !isDesktop && isCurrentDesktop;
  const isToNoDesktop = isDesktop && !isCurrentDesktop;

  if (isToDesktop) {
    isDesktop = true;
    removeSwiper();
  } else if (isToNoDesktop) {
    isDesktop = false;
    setSwiper();
  }
}

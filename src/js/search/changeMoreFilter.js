import { root } from "./root";

let isCloseMoreFilter = true;
export function changeMoreFilter() {
  if (isCloseMoreFilter) {
    showMoreFilter();
    isCloseMoreFilter = false;
    return;
  }
  hiddenMoreFilter();
  isCloseMoreFilter = true;
}

export function showMoreFilter() {
  root.moreList.classList.remove("is-hidden");
  root.btnMore.textContent = "закрити";
}

export function hiddenMoreFilter() {
  root.moreList.classList.add("is-hidden");
  root.btnMore.textContent = "ще параметри";
}

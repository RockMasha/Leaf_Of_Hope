export function removeInProgressLoader() {
  const loaderEl = document.querySelector(".inProgress-loader-wrapper");
  loaderEl.remove();
  document.body.removeAttribute("lock", "");
}

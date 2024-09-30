export function hiddenContentLoader() {
  setTimeout(() => {
    const loaderEl = document.querySelector(".content-loader-wrapper");
    loaderEl.removeAttribute("active");
  }, 1000);
}

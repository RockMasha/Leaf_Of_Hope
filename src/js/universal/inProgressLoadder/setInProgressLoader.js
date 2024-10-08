const loader = `<div class="inProgress-loader-wrapper">
                  <div class="inProgress-loader"></div>
                </div>`;

export function setInProgressLoader() {
  document.body.setAttribute("lock", "");
  document.body.insertAdjacentHTML("beforeend", loader);
}

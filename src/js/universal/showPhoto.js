export function showPhoto(label) {
  const imgWrappEL = label.querySelector(".img-wrapp");
  const imgEl = imgWrappEL.querySelector("img");
  const fileEl = label.querySelector("input[type=file]");

  const file = fileEl.files[0];
  const reader = new FileReader();

  reader.addEventListener("load", setImgInPage, false);

  if (file) {
    reader.readAsDataURL(file);
  }

  function setImgInPage() {
    imgEl.src = reader.result;
    if (!imgEl.classList.contains("big-photo")) {
      imgEl.classList.add("big-photo");
    }
    const imgOuter = imgEl.outerHTML;
    imgWrappEL.innerHTML = imgOuter;
  }
}

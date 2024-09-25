export function showPhoto(label) {
  const imgEL = label.querySelector("img");
  const inputEL = label.querySelector("input[type=file]").files[0];
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    () => {
      imgEL.src = reader.result;
      imgEL.classList.add("big-photo");
    },
    false
  );

  if (inputEL) {
    reader.readAsDataURL(inputEL);
  }
}

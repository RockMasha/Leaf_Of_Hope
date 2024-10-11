import { root } from "./root";

export function checkWishState(event) {
  const targetEl = event.target;
  const isRadioEl = targetEl.classList.contains("form-advert-way__input");
  if (!isRadioEl) {
    return;
  }
  console.log(targetEl);

  if (targetEl.classList.contains("form-advert-way__input_give")) {
    hiddenWishField();
    return;
  }

  showWishField();
}

function hiddenWishField() {
  root.wishField.classList.add("is-hidden");
//   root.wishField.remove();
}

function showWishField() {
  root.wishField.classList.remove("is-hidden");
}

import { modalCheck } from "./modalCheck";
import { setModalBtn } from "./setModalBtn";

export function setModalPanel() {
  modalCheck();
  window.addEventListener("resize", modalCheck);
  setModalBtn();
}

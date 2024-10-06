import { root } from "./root";

export function redactFormInner() {
  root.title.textContent = "Редактировка";
  root.btnSubmit.textContent = "Зберегти";
  root.password.remove();
}

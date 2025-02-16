import { root } from "./root";
import { setSigninGoogle } from "./signinGoogle";
import { signinUser } from "./signinUser";

export function showSigninModal() {
  root.mainEl.classList.add("is-hidden");
  root.modalEl.classList.remove("is-hidden");
  document.body.setAttribute("lock", "");
  root.modalEl.addEventListener("submit", signinUser);
  setSigninGoogle();
  root.googleBtn.addEventListener("click", () => {
    google.accounts.id.prompt();
  });
}

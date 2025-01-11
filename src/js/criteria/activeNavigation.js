import { closeModal } from "../universal/modalPanel/toggleModal";

export function activeNavigation(event) {
  const itemEl = event.target.closest(".navigation-panel__link");
  const isPhone = !window.matchMedia("(min-width: 768px)").matches;
  if (!itemEl || !isPhone) {
    return;
  }

  closeModal();
}

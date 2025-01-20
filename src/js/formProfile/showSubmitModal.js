export function showSubmitModal() {
  document.body.addAttribute("lock", "");
  const modalEl = `
    <div class="modal-wrapper authentication-modal-wrapper">
    <div class="authentication-modal modal">
        <img
        class="authentication-modal__img"
        src="https://res.cloudinary.com/dk3syrsg5/image/upload/v1737234161/email_uq3vzf.svg"
        alt="icon of email"
        />
        <p class="authentication-modal__text" key="deleteModalTitle">
        Вам надійшло письмо на почту для її пітвердження
        </p>
    </div>
    </div>
  `;

  document.body.insertAdjacentHTML("afterbegin", modalEl);
}

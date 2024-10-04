import { deleteAdvert } from "../servise/api";
import { Cards } from "../universal/Cards";

export class ProfileCard extends Cards {
  constructor(element, request, temple) {
    super(element, request, temple);
  }

  async showMainCard(params) {
    this.#addCardsListener();
    await this.showCards(params);
  }

  #addCardsListener() {
    this.changeCards = this.changeCards.bind(this);
    this.listCardsEl.addEventListener("click", this.changeCards);
  }

  changeCards(event) {
    const targetEl = event.target;
    const isDeleteEl = targetEl.closest(".delete-btn");
    const isRedactEl = targetEl.closest(".edit-btn");
    if (!isDeleteEl && !isRedactEl) {
      return;
    }

    const cardInfo = getCardInfo(targetEl);

    if (isDeleteEl) {
      this.#showDeleteModal(cardInfo);
      return;
    }
    this.#redactCard(cardInfo);
  }

  #showDeleteModal(data) {
    this.#openDeleteModal();
    this.#setModalBtnEvent(data);
  }

  async #redactCard(data) {}
  async #deleteCard(data) {
    this.#closeDeleteModal();
    try {
      this.#setDeleteLoader(data.cardEl);
      await deleteAdvert(data.id);
      this.#deleteCardOnPage(data.cardEl);
    } catch (error) {}
  }

  #openDeleteModal() {
    document.body.setAttribute("lock", "")
    const modalEl = getDeleteModal();
    document.body.insertAdjacentHTML("afterbegin", modalEl);
  }
  #closeDeleteModal() {
    document.body.removeAttribute("lock", "")
    const modalEl = document.querySelector(".modal-wrapper");
    modalEl.remove();
  }
  #setModalBtnEvent(data) {
    const disagreeBtn = document.querySelector(".delete-modal__btn_disagree");
    const agreeBtn = document.querySelector(".delete-modal__btn_agree");
    disagreeBtn.addEventListener("click", this.#closeDeleteModal);
    agreeBtn.addEventListener("click", this.#deleteCard.bind(this, data));
  }

  #deleteCardOnPage(element) {
    element.classList.add("is-hidden");
  }

  #setDeleteLoader(cardEl) {
    const loaderEl = getLoaderEl();
    cardEl.insertAdjacentHTML("afterbegin", loaderEl);
  }
}

function getCardInfo(element) {
  const cardEl = element.closest(".profile-adverts__card");
  const id = cardEl.dataset.id;
  return { cardEl, id };
}

function getDeleteModal() {
  return `
    <div class="modal-wrapper">
      <div class="delete-modal modal">
        <h3 class="delete-modal__title">Ви дійсно хочете видалити це оголошення?</h3>
        <div class="delete-modal__btns">
          <button class="delete-modal__btn delete-modal__btn_disagree" type="button">Ні</button>
          <button class="delete-modal__btn delete-modal__btn_agree" type="button">Так</button>
        </div>
      </div>
    </div>
  `;
}

function getLoaderEl() {
  return `
  <div class="delete-card-loader-wrapper">
    <div class="delete-card-loader"></div>
  </div>
  `;
}

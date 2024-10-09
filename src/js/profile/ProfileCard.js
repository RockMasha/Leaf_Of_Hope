import { deleteAdvert } from "../servise/api";
import { Cards } from "../universal/Cards";
import { removeInProgressLoader } from "../universal/inProgressLoadder/removeInProgressLoader";
import { setInProgressLoader } from "../universal/inProgressLoadder/setInProgressLoader";

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
    if (!isDeleteEl) {
      return;
    }

    const cardInfo = getCardInfo(targetEl);

    this.#showDeleteModal(cardInfo);
  }

  #showDeleteModal(data) {
    this.#openDeleteModal();
    this.#setModalBtnEvent(data);
  }

  async #deleteCard(data) {
    setInProgressLoader();
    this.#closeDeleteModal();
    try {
      await deleteAdvert(data.id);
      removeInProgressLoader();
      await this.showCards(this.params);
    } catch (error) {
      console.log(error);
    }
  }

  #openDeleteModal() {
    document.body.setAttribute("lock", "");
    let modalEl = document.querySelector(".delete-modal-wrapper");
    if (modalEl) {
      modalEl.classList.remove("is-hidden");
      return;
    }

    modalEl = getDeleteModal();
    document.body.insertAdjacentHTML("afterbegin", modalEl);
  }
  #closeDeleteModal() {
    const modalEl = document.querySelector(".delete-modal-wrapper");
    modalEl.classList.add("is-hidden");
    document.body.removeAttribute("lock", "");
  }
  #setModalBtnEvent(data) {
    const disagreeBtn = document.querySelector(".delete-modal__btn_disagree");
    const agreeBtn = document.querySelector(".delete-modal__btn_agree");
    disagreeBtn.addEventListener("click", this.#closeDeleteModal);
    agreeBtn.addEventListener("click", this.#deleteCard.bind(this, data));
  }

  #deleteCardOnPage(element) {
    element.classList.add("is-hidden");

    if (this.#isEmptyList()) {
      this.setDefaultElement();
    }
  }

  #isEmptyList() {
    const allCards = this.listCardsEl.querySelectorAll(
      ".profile-adverts__card"
    );
    const allHiddenCards = this.listCardsEl.querySelectorAll(
      ".profile-adverts__card.is-hidden"
    );

    return allCards.length === allHiddenCards.length;
  }
}

function getCardInfo(element) {
  const cardEl = element.closest(".profile-adverts__card");
  const id = cardEl.dataset.id;
  return { cardEl, id };
}

function getDeleteModal() {
  return `
    <div class="modal-wrapper delete-modal-wrapper">
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

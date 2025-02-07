import { deleteAdvert, doInactiveAdvert } from "../servise/api";
import { Cards } from "../universal/Cards";
import { createFormData } from "../universal/createFormData";
import { createFormObj } from "../universal/createFormObj";
import { removeInProgressLoader } from "../universal/inProgressLoadder/removeInProgressLoader";
import { setInProgressLoader } from "../universal/inProgressLoadder/setInProgressLoader";
import { translateAllPage } from "../universal/translate/original/translateAllPage";
import { changeSettingsValue } from "../universal/translate/universal/changeSettingsValue";
import { getCurrentLanguage } from "../universal/translate/universal/currentLanguage/getCurrentLanguage";
import { settings } from "./translate/settings";

export class ProfileCard extends Cards {
  #cloneCloseDeleteModal;
  #cloneDeleteCard;
  #cloneSetReasonModal;
  #cloneDoInactiveCard;
  #cloneDoActiveCard;

  constructor(element, request, temple) {
    super(element, request, temple);
    this.activeInputEl = this.fatherElement.querySelector(
      ".profile-adverts-state__input"
    );
  }

  async showMainCard(params) {
    this.#addCardsListener();
    await this.showCards(params);
  }

  showCards = async () => {
    const params = {
      active: this.#getStateCards(),
    };
    await super.showCards(params);
  };

  #addCardsListener() {
    this.changeCards = this.changeCards.bind(this);
    this.listCardsEl.addEventListener("click", this.changeCards);
    this.activeInputEl.addEventListener("change", this.showCards);
  }

  changeCards(event) {
    const targetEl = event.target;
    const isDeleteEl = targetEl.closest(".delete-btn");
    const isActiveBtn = targetEl.closest(".active-btn");
    const cardInfo = getCardInfo(targetEl);
    if (isDeleteEl) {
      this.#showDeleteModal(cardInfo);
    } else if (isActiveBtn) {
      this.#showDeleteModal(cardInfo, "active");
    }
  }

  #showDeleteModal(data, state) {
    this.#openDeleteModal(state);
    state === "active"
      ? this.#setActiveModalBtnEvent(data)
      : this.#setModalBtnEvent(data);
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

  async #doInactiveCard(data) {
    setInProgressLoader();
    this.#closeDeleteModal();
    try {
      const info = this.#getReason();
      await doInactiveAdvert(data.id, info);
      removeInProgressLoader();
      await this.showCards(this.params);
    } catch (error) {
      console.log(error);
    }
  }
  async #doActiveCard(data) {
    setInProgressLoader();
    this.#closeDeleteModal();
    try {
      await doInactiveAdvert(data.id, { active: "true" });
      removeInProgressLoader();
      await this.showCards(this.params);
    } catch (error) {
      console.log(error);
    }
  }

  #openDeleteModal(type) {
    document.body.setAttribute("lock", "");
    const modalEl = document.querySelector(".delete-modal-wrapper");
    const state = this.#getStateCards();
    const markup = getDeleteModal(state, type);
    modalEl.innerHTML = markup;
    const lang = getCurrentLanguage();
    if (lang === "en") {
      translateAllPage(settings, "en");
    }
    modalEl.classList.remove("is-hidden");
  }
  #closeDeleteModal() {
    this.#removeModalBtnEvent();
    const modalEl = document.querySelector(".delete-modal-wrapper");
    modalEl.classList.add("is-hidden");
    document.body.removeAttribute("lock", "");
  }
  #setReasonModal(data) {
    const modalEl = document.querySelector(".delete-modal-wrapper");
    modalEl.innerHTML = getInnerReasonModal();
    const formEl = document.querySelector(".reason");
    this.#cloneDoInactiveCard = (event) => {
      event.preventDefault();
      this.#doInactiveCard(data);
    };
    formEl.addEventListener("submit", this.#cloneDoInactiveCard);
  }
  #setModalBtnEvent(data) {
    this.#cloneCloseDeleteModal = this.#closeDeleteModal.bind(this, data);
    this.#cloneDeleteCard = this.#deleteCard.bind(this, data);
    this.#cloneSetReasonModal = this.#setReasonModal.bind(this, data);
    const disagreeBtn = document.querySelector(".delete-modal__btn_disagree");
    const agreeBtn = document.querySelector(".delete-modal__btn_agree");
    disagreeBtn.addEventListener("click", this.#cloneCloseDeleteModal);
    if (this.#getStateCards()) {
      agreeBtn.addEventListener("click", this.#cloneSetReasonModal);
      return;
    }
    agreeBtn.addEventListener("click", this.#cloneDeleteCard);
  }
  #setActiveModalBtnEvent(data) {
    this.#cloneCloseDeleteModal = this.#closeDeleteModal.bind(this, data);
    this.#cloneDoActiveCard = this.#doActiveCard.bind(this, data);
    const disagreeBtn = document.querySelector(".delete-modal__btn_disagree");
    const agreeBtn = document.querySelector(".delete-modal__btn_agree");
    disagreeBtn.addEventListener("click", this.#cloneCloseDeleteModal);
    agreeBtn.addEventListener("click", this.#cloneDoActiveCard);
  }
  #removeModalBtnEvent() {
    const disagreeBtn = document.querySelector(".delete-modal__btn_disagree");
    const agreeBtn = document.querySelector(".delete-modal__btn_agree");
    const formEl = document.querySelector(".reason");
    disagreeBtn?.removeEventListener("click", this.#cloneCloseDeleteModal);
    agreeBtn?.removeEventListener("click", this.#cloneDeleteCard);
    agreeBtn?.removeEventListener("click", this.#cloneSetReasonModal);
    formEl?.removeEventListener("click", this.#cloneSetReasonModal);
    formEl?.removeEventListener("submit", this.#cloneDoInactiveCard);
  }

  #getStateCards() {
    return !this.activeInputEl.checked;
  }
  #getReason() {
    const form = document.querySelector(".reason");
    const data = createFormData(form);
    data.append("active", !this.#getStateCards());
    return createFormObj(data);
  }
}

function getCardInfo(element) {
  const cardEl = element.closest(".profile-adverts__card");
  const id = cardEl?.dataset?.id;
  return { cardEl, id };
}

function getDeleteModal(state, type) {
  const textUa = state
    ? "деактивувати"
    : type === "active"
    ? "активувати"
    : "видалити";

  const textEn = state
    ? "deactivate"
    : type === "active"
    ? "activate"
    : "delete";

  const data = {
    property: "deleteModalTitle",
    ua: `Ви дійсно хочете ${textUa} це оголошення?`,
    en: `Are you sure you want to ${textEn} this advert?`,
  };
  changeSettingsValue(settings, data);

  return `
      <div class="delete-modal modal">
        <h3 class="delete-modal__title" key="deleteModalTitle">Ви дійсно хочете ${textUa} це оголошення?</h3>
        <div class="delete-modal__btns">
          <button class="delete-modal__btn delete-modal__btn_disagree" key="deleteModalFalse" type="button">Ні</button>
          <button class="delete-modal__btn delete-modal__btn_agree" key="deleteModalTrue" type="button">Так</button>
        </div>
      </div>
  `;
}

function getInnerReasonModal() {
  const { title, foundOnSite, foundOnAnotherResurses, notFound, submit } =
    getDataInnerReasonModal();

  return `
      <div class="delete-modal modal">
        <form class="reason">
          <h2 class="reason__title">${title} </h2>
          <ul class="reason__list">
            <li class="reason__item">
              <label class="reason__label">
                <input
                  class="reason__input"
                  type="radio"
                  name="reason"
                  value="foundOnSite"
                  checked
                />
                ${foundOnSite}
              </label>
            </li>
            <li class="reason__item">
              <label class="reason__label">
                <input
                  class="reason__input"
                  type="radio"
                  name="reason"
                  value="foundOnAnotherResurses"
                />
                ${foundOnAnotherResurses}
              </label>
            </li>
            <li class="reason__item">
              <label class="reason__label">
                <input
                  class="reason__input"
                  type="radio"
                  name="reason"
                  value="notFound"
                />
                ${notFound}
              </label>
            </li>
          </ul>
          <button class="reason__btn-submit" type="submit">${submit}</button>
        </form>
      </div>
  `;
}

function getDataInnerReasonModal() {
  const lang = getCurrentLanguage();
  if (lang === "ua") {
    return {
      title: "Чи змогли ви передати/обміняти рослину?",
      foundOnSite: "Так, на цьому сайті",
      foundOnAnotherResurses: "Так, в іншому місці",
      notFound: "Ні",
      submit: "Підвердити",
    };
  } else {
    return {
      title: "Were you able to transfer/exchange the plant?",
      foundOnSite: "Yes, on this site",
      foundOnAnotherResurses: "Yes, in another place",
      notFound: "No",
      submit: "Confirm",
    };
  }
}

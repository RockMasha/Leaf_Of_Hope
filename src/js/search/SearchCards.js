import { getAdverts } from "../servise/api";
import { scrollUp } from "../universal/btnUpSettings";
import { Cards } from "../universal/Cards";
import { createFormObj } from "../universal/createFormObj";
import { closeModal } from "./toggleModal";

export class SearchCards extends Cards {
  constructor(element, form) {
    super(element, getAdverts);
    this.formEl = form;
    this.params;
  }

  addSubmitEvent() {
    this.showMainCard = this.showMainCard.bind(this);
    this.formEl.addEventListener("submit", this.showMainCard);
  }

  showOpenCard() {
    this.#resetPage();
    const params = createFormObj(this.formEl);  

    super.showMainCard(params);
    this.#setParams(params);
  }

  async showMainCard(event) {
    event.preventDefault();

    if (window.innerWidth < 768) {
      closeModal();
    }
    this.showOpenCard();
  }

  async showCards(params = this.params) {
    await super.showCards(params);
    scrollUp()
  }

  #resetPage() {
    this.page = 1;
  }
  #setParams(params) {
    this.params = params;
  }
}

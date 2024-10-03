import { getAdverts } from "../servise/api";
import { Cards } from "../universal/Cards";
import { createFormObj } from "../universal/createFormObj";

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

  async showMainCard(event) {
    event.preventDefault();

    this.#resetPage();
    const params = createFormObj(this.formEl);

    super.showMainCard(params);
    this.#setParams(params);
  }

  async showCards(params = this.params) {
    super.showCards(params);
  }

  #resetPage() {
    this.page = 1;
  }
  #setParams(params) {
    this.params = params;
  }
}

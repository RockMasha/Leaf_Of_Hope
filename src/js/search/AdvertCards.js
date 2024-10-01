import { getAdverts } from "../servise/api";
import { getCard } from "./getCard";

export class AdvertCards {
  #showNextCards;
  #showBackCards;
  #showSpecifiedCards;
  #showFirstCards;
  #showLastCards;
  #setPagination;

  constructor(element) {
    this.fatherElement = element;
    this.listCardsEl = element.querySelector(".cards-list");
    this.paginationEl = element.querySelector(".pagination");
    this.paginationListEl = element.querySelector(".pagination__numb");
    this.backEl = element.querySelector(".pagination-arrow_back");
    this.nextEl = element.querySelector(".pagination-arrow_next");
    this.firstEL = element.querySelector(".pagination-arrow_first");
    this.lastEL = element.querySelector(".pagination-arrow_last");
    this.params;
    this.page = 1;
    this.maxAdvertInPage = 10;
    this.max_page;
  }

  async showFirstCard(params) {
    this.#showCards(params);
    this.params = params;
    this.paginationEl.classList.remove("is-hidden");
  }

  async showNextCards() {
    if (this.page >= this.max_page) {
      return;
    }

    this.#nextPage();
    this.#showCards();
  }

  async showBackCards() {
    if (this.page <= 1) {
      return;
    }

    this.#backPage();
    this.#showCards();
  }

  async showFirstCards() {
    if (this.page <= 1) {
      return;
    }

    this.#firstPage();
    this.#showCards();
  }

  async showLastCards() {
    if (this.page === this.max_page) {
      return;
    }

    this.#lastPage();
    this.#showCards();
  }

  async showSpecifiedCards(event) {
    const targetEl = event.target;
    const isNoNeedEl =
      !targetEl.matches(".pagination__btn") &&
      !targetEl.matches(".pagination__item");
    if (isNoNeedEl) {
      return;
    }
    const element = targetEl.closest(".pagination__item");
    const page = Number(element.dataset.page);
    this.#setPage(page);
    this.#showCards();
  }

  async #showCards(params = this.params) {
    this.disablePagination();
    await this.#setCards(params, this.page);
    this.setPagination();
  }

  async #setCards(params) {
    const answer = await getAdverts(params, this.page);
    this.#setMaxPage(answer.tottal);
    const cardsArr = answer.result;
    const cardsEl = cardsArr.map((advert) => getCard(advert));
    this.listCardsEl.innerHTML = cardsEl.join("");
  }

  #setPage(page) {
    this.page = page;
  }
  #nextPage() {
    this.page += 1;
  }
  #backPage() {
    this.page -= 1;
  }
  #firstPage() {
    this.page = 1;
  }
  #lastPage() {
    this.page = this.max_page;
  }

  #setMaxPage(maxAdvert) {
    this.max_page = Math.ceil(maxAdvert / this.maxAdvertInPage);
  }

  setPagination() {
    this.#setListPagination();
    this.#setPaginationFunction();
    this.nextEl.addEventListener("click", this.#showNextCards);
    this.backEl.addEventListener("click", this.#showBackCards);
    this.paginationListEl.addEventListener("click", this.#showSpecifiedCards);
    this.firstEL.addEventListener("click", this.#showFirstCards);
    this.lastEL.addEventListener("click", this.#showLastCards);
  }
  disablePagination() {
    this.nextEl.removeEventListener("click", this.#showNextCards);
    this.backEl.removeEventListener("click", this.#showBackCards);
    this.paginationListEl.removeEventListener(
      "click",
      this.#showSpecifiedCards
    );
    this.firstEL.removeEventListener("click", this.#showFirstCards);
    this.lastEL.removeEventListener("click", this.#showLastCards);
  }

  #setPaginationFunction() {
    this.#showBackCards = this.showBackCards.bind(this);
    this.#showNextCards = this.showNextCards.bind(this);
    this.#showSpecifiedCards = this.showSpecifiedCards.bind(this);
    this.#setPagination = this.setPagination.bind(this);
    this.#showFirstCards = this.showFirstCards.bind(this);
    this.#showLastCards = this.showLastCards.bind(this);
  }

  #setListPagination() {
    const paginationBlocks = this.#getPaginationBtn();
    this.paginationListEl.innerHTML = paginationBlocks;
    this.#setActivePaginationBtn();
  }

  #getPaginationBtn() {
    let paginationBlocks = "";
    if (this.max_page >= 3) {
      let index = -1;
      if (this.page === 1) {
        index = 0;
      } else if (this.page === this.max_page) {
        index = -2;
      }
      for (let i = 1; i <= 3; i++) {
        const pageNumb = index + this.page;
        paginationBlocks += getPaginationItem(pageNumb);
        index++;
      }
    } else {
      for (let i = 1; i <= this.max_page; i++) {
        paginationBlocks += getPaginationItem(i);
      }
    }
    return paginationBlocks;
  }

  #setActivePaginationBtn() {
    const activePageEl = document.querySelector(
      `.pagination__item[data-page="${this.page}"]`
    );
    activePageEl.setAttribute("active", "");
  }
}

function getPaginationItem(numb) {
  return `<li class="pagination__item" data-page="${numb}">
            <button class="pagination__btn">${numb}</button>
          </li>`;
}

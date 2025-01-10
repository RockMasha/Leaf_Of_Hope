import { getCard } from "../search/getCard";
import { getCurrentLanguage } from "./translate/universal/currentLanguage/getCurrentLanguage";

export class Cards {
  #showBackCards;
  #showNextCards;
  #showSpecifiedCards;
  #showFirstCards;
  #showLastCards;

  constructor(element, request, temple = getCard) {
    this.fatherElement = element;
    this.listCardsEl = element.querySelector(".cards-list");
    this.paginationEl = element.querySelector(".pagination");
    this.paginationListEl = element.querySelector(".pagination__numb");
    this.backEl = element.querySelector(".pagination-arrow_back");
    this.nextEl = element.querySelector(".pagination-arrow_next");
    this.firstEL = element.querySelector(".pagination-arrow_first");
    this.lastEL = element.querySelector(".pagination-arrow_last");
    this.loaderEL;
    this.page = 1;
    this.maxAdvertInPage = 10;
    this.max_page;
    this.getCard = temple;
    this.request = request;
    this.lastCardInfo = [];
  }

  async showMainCard(params) {
    await this.showCards(params);
  }

  async showNextCards() {
    if (this.page >= this.max_page) {
      return;
    }
    this.#nextPage();
    this.showCards();
  }

  async showBackCards() {
    if (this.page <= 1) {
      return;
    }
    this.#backPage();
    this.showCards();
  }

  async showFirstCards() {
    if (this.page <= 1) {
      return;
    }
    this.#firstPage();
    this.showCards();
  }

  async showLastCards() {
    if (this.page === this.max_page) {
      return;
    }
    this.#lastPage();
    this.showCards();
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
    this.showCards();
  }

  async showSomeCards() {
    this.#setCardsInPage(this.lastCardInfo);
  }

  async showCards(params = {}) {
    this.#setLoaderCard();
    this.disablePagination();
    const answer = await this.#setCards(params);
    if (answer) {
      this.setPagination();
    }
    this.#removeLoaderCard();
  }

  async #setCards(params) {
    try {
      const answer = await this.request(this.page, params);
      this.#setMaxPage(answer.tottal);
      const cardsArr = answer.result;
      this.#setLastCardInfo(cardsArr);
      const result = this.#setCardsInPage(cardsArr);
      return result;
    } catch (error) {
      return false;
    }
  }

  #setCardsInPage(cardsArr) {
    if (cardsArr.length === 0) {
      this.setDefaultElement();
      return false;
    }

    const cardsEl = cardsArr.map((advert) => {
      return this.getCard(advert);
    });

    this.listCardsEl.innerHTML = cardsEl.join("");
    return true;
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

  #setLastCardInfo(answer) {
    this.lastCardInfo = answer;
  }

  setPagination() {
    this.#setPaginationFunction();
    this.#showPagination();
    this.#setListPagination();
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
  #showPagination() {
    this.paginationEl.classList.remove("is-hidden");
  }
  #hiddenPagination() {
    this.paginationEl.classList.add("is-hidden");
  }

  #setLoaderCard() {
    document.body.setAttribute("lock", "");
    if (!this.loaderEL) {
      this.fatherElement.insertAdjacentHTML("beforeend", getCardLoader());
      this.loaderEL = document.querySelector(".card-loader-wrapper");
      return;
    }
    this.loaderEL.classList.remove("is-hidden");
  }
  #removeLoaderCard() {
    document.body.removeAttribute("lock", "");
    this.loaderEL.classList.add("is-hidden");
  }

  setDefaultElement() {
    this.listCardsEl.innerHTML = getDefaultElement();
    this.#hiddenPagination();
  }
}

function getPaginationItem(numb) {
  return `<li class="pagination__item" data-page="${numb}">
            <button class="pagination__btn">${numb}</button>
          </li>`;
}

function getCardLoader() {
  return `<div class="card-loader-wrapper">
            <div class="card-loader-block">
              <div class="card-loader"></div>
            </div>
          </div>`;
}

function getDefaultElement() {
  const lang = getCurrentLanguage();
  const text = lang === "ua" ? "Немає оголошень" : "There are no adverts";
  return `<div class="cards-list-default">
            <img
              class="cards-list-default__img"
              src="https://res.cloudinary.com/dk3syrsg5/image/upload/v1733484608/defoult-plant_rd42lo.svg"
              alt="Незнайдено оголошень"
            />
            <p class="cards-list-default__text" key="defaultCardListText">${text}</p>
          </div>`;
}

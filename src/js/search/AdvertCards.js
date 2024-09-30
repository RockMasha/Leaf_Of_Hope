import { getAdverts } from "../servise/api";
import { getCard } from "./getCard";

export class AdvertCards {
  #showPageCard;

  constructor(element) {
    this.fatherElement = element;
    this.listCardsEl = element.querySelector(".cards-list");
    this.paginationListEl = element.querySelector(".pagination");
    this.backEl = element.querySelector(".pagination__back");
    this.nextEl = element.querySelector(".pagination__next");
    this.params;
    this.page = 1;
    this.maxAdvertInPage = 10;
    this.max_page;
  }

  async showNextCards() {
    this.nextPage();
    await this.setCards(this.params, this.page);
    this.setMaxPage(answer.tottal);
    this.setPagination();
  }

  async showBackCards() {
    this.backPage();
    await this.setCards(this.params, this.page);
    this.setMaxPage(answer.tottal);
    this.setPagination();
  }

  async showSpecifiedCards(page) {
    this.setPage(page);
    await this.setCards(this.params, this.page);
    this.setMaxPage(answer.tottal);
    this.setPagination();
  }

  async setCards(params) {
    const answer = await getAdverts(params, page);
    const cardsArr = answer.result;
    const cardsEl = cardsArr.map((advert) => getCard(advert));
    this.listCardsEl.innerHTML = cardsEl.join("");
  }

  setPage(page) {
    this.page = page;
  }
  nextPage() {
    this.page += 1;
  }
  backPage() {
    this.page -= 1;
  }
  resetPage() {
    this.page = 0;
  }

  setMaxPage(maxAdvert) {
    this.max_page = Math.ceil(maxAdvert / this.maxAdvertInPage);
  }

  setPagination() {
    setListPagination();
    this.#showPageCard = this.bind.showSpecifiedCards();
    this.nextEl.addEventListener("click", this.showNextCards);
    this.backEl.addEventListener("click", this.showBackCards);
    this.paginationListEl.addEventListener("click", this.#showPageCard);
  }
  disablePagination() {
    this.nextEl.removeEventListener("click", this.showNextCards);
    this.backEl.removeEventListener("click", this.showBackCards);
    this.paginationListEl.removeEventListener("click", this.#showPageCard);
  }

  setListPagination() {
    const paginationBlocks = "";
    for (let i = 1; i <= this.max_page; i++) {
      paginationBlocks += getPaginationItem(i);
    }

    this.paginationListEl.innerHTML = paginationBlocks;
  }
}

function getPaginationItem(numb) {
  return `<li class="pagination__item">
            <button class="pagination__btn">${numb}</button>
          </li>`;
}

// #showMoreFilms;

// async setCardsOnGenres(id) {
//   if (this.#isEqualGenres(id)) {
//     return;
//   }

//   if (!this.#isOnPageCardLoader()) {
//     this.#setCardLoader();
//   }

//   if (!this.isNoBtn && this.btn) {
//     this.#removeBtn();
//   } else {
//     this.isNoBtn = false;
//   }

//   this.setGenresId(id);

//   this.listCardsEl.innerHTML = "";
//   this.resetPage();
//   const answer = await this.setCardsOfFilms();

//   if (answer !== "error") {
//     this.#setBtn();
//     this.#removeCardLoader();
//   }
// }

// async setCardsOfFilms() {
//   this.nextPage();
//   if (this.page !== 1 || this.#checkNumbOfFilms()) {
//     this.#disableBtn();
//     this.#loadBtn();
//   }

//   let answer;
//   try {
//     const infoOfCards = await createSomeCards(fetchFilmsByGenres, {
//       genreId: this.genresId,
//       page: this.page,
//     });

//     const { cards, maxFilms } = infoOfCards;
//     this.#setCards(cards.join(""));
//     this.#setMaxFilms(maxFilms);
//   } catch (error) {
//     answer = "error";
//   }

//   if (this.#checkNumbOfFilms()) {
//     this.#removeBtn();
//     this.isNoBtn = true;
//   }

//   if (this.page !== 1 && !this.#checkNumbOfFilms()) {
//     this.#activeBtn();
//     this.#unLoadBtn();
//   }

//   updateProgressBar();

//   return answer === "error" ? answer : "ok";
// }

// setGenresId(id) {
//   this.genresId = id;
// }

// nextPage() {
//   this.page += 1;
// }
// resetPage() {
//   this.page = 0;
// }

// #isEqualGenres(id) {
//   return this.genresId === id;
// }

// #setCards(cards) {
//   this.listCardsEl.insertAdjacentHTML("beforeend", cards);
// }

// #setMaxFilms(numb) {
//   this.max_films = numb;
// }

// #setBtn() {
//   const templateBtn = '<button class="genres__bth-more">More movies</button>';
//   this.fatherElement.insertAdjacentHTML("beforeend", templateBtn);
//   this.btn = document.querySelector(".genres__bth-more");
//   this.#activeBtn();
// }
// #removeBtn() {
//   this.btn.remove();
// }
// #disableBtn() {
//   this.btn.removeEventListener("click", this.#showMoreFilms);
// }
// #activeBtn() {
//   this.#showMoreFilms = this.setCardsOfFilms.bind(this);
//   this.btn.addEventListener("click", this.#showMoreFilms);
// }
// #loadBtn() {
//   this.btn.insertAdjacentHTML("beforeend", getBtnLoader());
// }
// #unLoadBtn() {
//   const loader = this.btn.querySelector(".btnMoreLoader");
//   loader.remove();
// }

// #setCardLoader() {
//   this.fatherElement.insertAdjacentHTML("beforeend", getCardLoader());
// }
// #removeCardLoader() {
//   const loader = this.fatherElement.querySelector(".genresCard-loader");
//   loader.remove();
// }
// #isOnPageCardLoader() {
//   const loader = this.fatherElement.querySelector(".genresCard-loader");
//   if (loader) {
//     return true;
//   }
//   return false;
// }

// #checkNumbOfFilms() {
//   return this.page * 20 >= this.max_films;
// }
// }

// function getBtnLoader() {
// return `<div class="btnMoreLoader"></div>`;
// }

// function getCardLoader() {
// return `<div class="genresCard-loader"></div>`;
// // }
//

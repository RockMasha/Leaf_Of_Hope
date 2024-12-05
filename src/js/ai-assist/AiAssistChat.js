import { createChat, deleteChat, getChat, sendMessage } from "../servise/api";
import { removeInProgressLoader } from "../universal/inProgressLoadder/removeInProgressLoader";
import { setInProgressLoader } from "../universal/inProgressLoadder/setInProgressLoader";
import { getCurrentLanguage } from "../universal/translate/universal/currentLanguage/getCurrentLanguage";

export class AiAssistChat {
  #cloneCloseDeleteModal;
  #cloneDeleteChat;
  #cloneBtnSetOneSession;
  #cloneEnterSetOneSession;

  constructor(aiAssistEl, userImage) {
    this.chatEl = aiAssistEl.querySelector(".chat");
    this.chatForm = aiAssistEl.querySelector(".chat-form");
    this.chatText = aiAssistEl.querySelector(".enter-text");
    this.chatPlusBtn = aiAssistEl.querySelector(".chat-plus-btn");
    this.chatPlusList = aiAssistEl.querySelector(".chat-plus-list");
    this.chatDeleteEl = aiAssistEl.querySelector(".chat-delete");
    this.loader = aiAssistEl.querySelector(".chat-loader");
    this.userAvatar = userImage;
    this.assistAvatar = {
      "small-chat-avatar-45px":
        "./img/ai-assist/ai-assist-avatar/ai-assist_45.jpg",
      "chat-avatar-75px": "./img/ai-assist/ai-assist-avatar/ai-assist_75.jpg",
    };
  }

  setCommunication() {
    this.setConversation();
    this.chatPlusBtn.addEventListener(
      "click",
      this.changeStatePlusPanel.bind(this)
    );
    this.chatDeleteEl.addEventListener(
      "click",
      this.shawDeleteChatModal.bind(this)
    );
    this.#addOneSessionEvent();
  }

  async setConversation() {
    let chat;
    try {
      chat = await getChat();
    } catch (error) {
      chat = await createChat();
    }
    const chatMessages = chat.messages.map((item) => {
      return this.#getMessage(item);
    });
    this.chatEl.innerHTML = chatMessages.join("");
  }

  changeStatePlusPanel() {
    this.chatPlusList.classList.toggle("is-hidden");
  }

  shawDeleteChatModal(data) {
    this.#openDeleteModal();
    this.#setModalBtnEvent(data);
  }

  #addOneSessionEvent() {
    this.#cloneBtnSetOneSession = this.btnSetOneSession.bind(this);
    this.#cloneEnterSetOneSession = this.enterSetOneSession.bind(this);
    this.chatForm.addEventListener("submit", this.#cloneBtnSetOneSession);
    document.addEventListener("keydown", this.#cloneEnterSetOneSession);
  }
  #removeOneSessionEvent() {
    this.chatForm.removeEventListener("submit", this.#cloneBtnSetOneSession);
    document.removeEventListener("keydown", this.#cloneEnterSetOneSession);
  }
  async enterSetOneSession(event) {
    if (event.key !== "Enter") {
      return;
    }
    this.setOneSession();
  }
  async btnSetOneSession(event) {
    event.preventDefault();
    this.setOneSession();
  }
  async setOneSession() {
    const userText = this.#getUserText();
    if (
      userText.trim() === "" ||
      userText.trim() === this.#getDefaultEnterText()
    ) {
      return;
    }
    this.#removeOneSessionEvent();
    this.#clearForm();
    this.#addMessage({ role: "user", content: userText });
    await this.#setAiAnswer(userText);
    this.#addOneSessionEvent();
    this.chatText.textContent = this.#getDefaultEnterText();
  }

  async #setAiAnswer(userText) {
    this.#setLoader();
    const assistMessage = await sendMessage(userText);
    this.#addMessage(assistMessage);
    this.#removeLoader();
  }
  #addMessage(message) {
    const element = this.#getMessage(message);
    this.chatEl.insertAdjacentHTML("beforeend", element);
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
    const lang = getCurrentLanguage();
    if (lang === "en") {
      translateAllPage(settings, "en");
    }
  }
  #closeDeleteModal() {
    this.#removeModalBtnEvent();
    const modalEl = document.querySelector(".delete-modal-wrapper");
    modalEl.classList.add("is-hidden");
    document.body.removeAttribute("lock", "");
  }
  #setModalBtnEvent(data) {
    this.#cloneCloseDeleteModal = this.#closeDeleteModal.bind(this, data);
    this.#cloneDeleteChat = this.#deleteChat.bind(this, data);
    const disagreeBtn = document.querySelector(".delete-modal__btn_disagree");
    const agreeBtn = document.querySelector(".delete-modal__btn_agree");
    disagreeBtn.addEventListener("click", this.#cloneCloseDeleteModal);
    agreeBtn.addEventListener("click", this.#cloneDeleteChat);
  }
  #removeModalBtnEvent() {
    const disagreeBtn = document.querySelector(".delete-modal__btn_disagree");
    const agreeBtn = document.querySelector(".delete-modal__btn_agree");
    disagreeBtn.removeEventListener("click", this.#cloneCloseDeleteModal);
    agreeBtn.removeEventListener("click", this.#cloneDeleteChat);
  }
  async #deleteChat() {
    setInProgressLoader();
    this.#closeDeleteModal();
    try {
      await deleteChat();
      await this.setConversation();
      this.changeStatePlusPanel();
      removeInProgressLoader();
    } catch (error) {
      console.log(error);
    }
  }

  #getMessage(data) {
    const { role, content } = data;
    const image = role === "user" ? this.userAvatar : this.assistAvatar;
    return `
          <li class="ai-assist-chat__message ai-assist-chat__message_${role}">
            ${getPicture(image)}
            <p class="ai-assist-chat__text">${content}</p>
          </li>`;
  }
  #getUserText() {
    const formData = new FormData(this.chatForm);
    return formData.get("message");
  }

  #clearForm() {
    this.chatForm.reset();
    this.chatText.textContent = this.#getDefaultEnterText();
  }

  #setLoader() {
    this.loader.classList.remove("is-hidden");
  }
  #removeLoader() {
    this.loader.classList.add("is-hidden");
  }

  #getDefaultEnterText() {
    const lang = getCurrentLanguage();
    return lang == "ua" ? `Написати...` : `Write...`;
  }
}

function getPicture(image) {
  const smallImg = image["small-chat-avatar-45px"];
  const middleImg = image["small-chat-avatar-45px"];
  const bigImg = image["chat-avatar-75px"];

  return `
        <picture class="ai-assist-chat__avatar">
          <source
            srcset="
              ${bigImg} 1x,
              ${bigImg} 2x"
            media="(min-width: 1440px)"
          />
          <source
            srcset="
              ${middleImg} 1x,
              ${middleImg} 2x"
            media="(min-width: 768px)"
          />
          <source
            srcset="
              ${smallImg} 1x,
              ${smallImg} 2x"
          />
          <img
            src="${smallImg}"
            srcset="
              ${smallImg} 1x,
              ${smallImg} 2x,"
            class="ai-assist-chat__avatar"
            alt="ai-assist avatar"
            loading="lazy"
          />
        </picture>`;
}

function getDeleteModal() {
  return `
  <div class="modal-wrapper delete-modal-wrapper">
  <div class="delete-modal modal">
    <h3 class="delete-modal__title" key="deleteModalTitle">Ви дійсно хочете очистити цей чат?</h3>
    <div class="delete-modal__btns">
      <button class="delete-modal__btn delete-modal__btn_disagree" key="deleteModalFalse" type="button">Ні</button>
      <button class="delete-modal__btn delete-modal__btn_agree" key="deleteModalTrue" type="button">Так</button>
    </div>
  </div>
</div>`;
}

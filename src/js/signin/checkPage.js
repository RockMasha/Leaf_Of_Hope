import { setChat } from "../ai-assist/setChat";

export function checkPage(user) {
  const isAiAssistPage = document.querySelector(".ai-assist");
  if (isAiAssistPage) {
    setChat(user);
  }
}

import { AiAssistChat } from "./AiAssistChat";
import { root } from "./root";

export function setChat(user) {
  const aiAssistChat = new AiAssistChat(root.aiAssist, user.user.avatar);
  aiAssistChat.setCommunication();
}

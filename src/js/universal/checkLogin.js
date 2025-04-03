import { getInfo } from "../servise/api";
import { changePage } from "./chanhePage";

export async function checkLogin() {
  const answer = await getInfo();
  if (!answer) {
    changePage("profile.html");
  }
}

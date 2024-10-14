import { getInfo } from "../servise/api";
import { getToken } from "../token/getToken";

export async function isSignin() {
  const token = getToken();

  if (!token) {
    return false;
  }

  try {
    const answer = await getInfo(token);
    return answer;
  } catch (error) {
    return false;
  }
}

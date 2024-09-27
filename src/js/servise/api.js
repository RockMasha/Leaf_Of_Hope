import axios from "axios";

// axios.defaults.baseURL = "https://leafofhope-backend.onrender.com";
axios.defaults.baseURL = "https://68cf-31-144-181-235.ngrok-free.app";

export async function authorization(user) {
  try {
    const answer = await axios.post("/api/auth/signup", user);
    return answer.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getInfo(token) {
  try {
    const answer = await axios.get("/api/auth/getInfo");
    return answer.data;
  } catch (error) {
    console.log(error);
  }
}

export async function signin(info) {
  try {
    const answer = await axios.post("/api/auth/signin", info);
    return answer.data;
  } catch (error) {
    console.log(error);
  }
}

export const setAuthHeader = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

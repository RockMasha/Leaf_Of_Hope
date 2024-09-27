import axios from "axios";

axios.defaults.baseURL = "https://leafofhope-backend.onrender.com";
// axios.defaults.baseURL = "https://33ef-46-164-129-202.ngrok-free.app";

export async function authorization(user) {
  try {
    const answer = await axios.post("/api/auth/signup", user, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(answer);

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

export async function postAdvert(info, token) {
  try {
    const answer = await axios.post("/api/advert/", info, {
      headers: {
        Authorization: token,
      },
    });
    return answer.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getAdverts(info) {
  try {
    const answer = await axios.get("/api/advert/", info);
    return answer.data;
  } catch (error) {
    console.log(error);
  }
}

export const setAuthHeader = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

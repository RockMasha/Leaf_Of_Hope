import axios from "axios";

axios.defaults.baseURL = "https://leafofhope-backend.onrender.com";

export async function authorization(user) {
  try {
    const answer = await axios.post("/api/auth/signup", user, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return answer.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getInfo(token) {
  try {
    const answer = await axios.get("/api/auth/getInfo", {
      headers: {
        Authorization: token,
      },
    });
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

export const getUserAdverts = async (token) => {
  try {
    const answer = await axios.get("/api/advert/userAdverts", {
      headers: {
        Authorization: token,
      },
    });
    return answer.data;
  } catch (error) {
    console.log(error);
  }
};

export async function getAdverts(info, page = 1) {
  try {
    const answer = await axios.get(`/api/advert?page=${page}&limit=10`, info);
    return answer.data;
  } catch (error) {
    console.log(error);
  }
}

export const setAuthHeader = (token) => {
  axios.defaults.headers.Authorization = `Bearer ${token}`;
};

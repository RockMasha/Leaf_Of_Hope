import axios from "axios";
import { getToken } from "../token/getToken";

// axios.defaults.baseURL = "https://5394-188-163-74-2.ngrok-free.app";
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

export async function redactUser(user, token = getToken()) {
  try {
    const answer = await axios.put("/api/auth/", user, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: token,
      },
    });
    return answer.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getInfo(token = getToken()) {
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

export async function postAdvert(info, token = getToken()) {
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

export const getUserAdverts = async (page = 1) => {
  const token = getToken();
  try {
    const answer = await axios.get(
      `/api/advert/userAdverts?page=${page}&limit=10`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return answer.data;
  } catch (error) {
    console.log(error);
  }
};

export async function getAdverts(page = 1, info) {
  try {
    const params = getFilterParams(info);
    const url = `/api/advert?page=${page}&limit=10${params}`;
    const answer = await axios.get(url);
    return answer.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getOneAdvert(id) {
  try {
    const url = `/api/advert/${id}`;
    const answer = await axios.get(url);
    return answer.data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteAdvert(id) {
  const token = getToken();
  try {
    const answer = await axios.delete(`/api/advert/${id}`, {
      headers: {
        Authorization: token,
      },
    });
    return answer.data;
  } catch (error) {
    console.log(error);
  }
}

function getFilterParams(params) {
  let paramsStr = "";
  for (const key in params) {
    const value = params[key];
    if (value !== "") {
      paramsStr += `&${key}=${value}`;
    }
  }
  return paramsStr;
}

export const setAuthHeader = (token) => {
  axios.defaults.headers.Authorization = `Bearer ${token}`;
};

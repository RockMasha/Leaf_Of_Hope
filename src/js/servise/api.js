import axios from "axios";
import { getToken } from "../token/getToken";
import { getCurrentLanguage } from "../universal/translate/universal/currentLanguage/getCurrentLanguage";

axios.defaults.baseURL = "https://leafofhope-backend.onrender.com";

export async function authentication(user) {
  const answer = await axios.post("/api/auth/signup/verificate", user, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return answer.data;
}
export async function checkAuthentication(verificationToken) {
  const answer = await axios.put(
    `/api/auth/verificate/${verificationToken}`,
    {},
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return answer.data;
}
export async function authorization(user) {
  const answer = await axios.post("/api/auth/signup", user, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return answer.data;
}
export async function redactUser(user, token = getToken()) {
  const answer = await axios.put("/api/auth/", user, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: token,
    },
  });
  return answer.data;
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
  const answer = await axios.post("/api/auth/signin", info);
  return answer.data;
}
export async function logout(token = getToken()) {
  try {
    const answer = await axios.post("/api/auth/logout", {
      headers: {
        Authorization: token,
      },
    });
    return answer.data;
  } catch (error) {
    console.log(error);
  }
}

let userAdvertsController = null;
export const getUserAdverts = async (page = 1, info = {}) => {
  if (userAdvertsController) {
    getAdvertsController.abort();
  }

  const token = getToken();
  try {
    userAdvertsController = new AbortController();
    const params = getFilterParams(info);
    const answer = await axios.get(
      `/api/advert/userAdverts?page=${page}&limit=10${params}`,
      {
        signal: userAdvertsController.signal,
        headers: {
          Authorization: token,
        },
      }
    );

    userAdvertsController = null;
    return answer.data;
  } catch (error) {}
};

let getAdvertsController = null;
export async function getAdverts(page = 1, info) {
  if (getAdvertsController) {
    getAdvertsController.abort();
  }

  try {
    getAdvertsController = new AbortController();
    const params = getFilterParams(info);
    const url = `/api/advert?page=${page}&limit=10${params}`;
    const answer = await axios.get(url, {
      signal: getAdvertsController.signal,
    });

    getAdvertsController = null;
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

export async function postAdvert(info, token = getToken()) {
  const answer = await axios.post("/api/advert/", info, {
    headers: {
      Authorization: token,
    },
  });
  return answer.data;
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
export async function changeAdvert(id, data) {
  const token = getToken();
  const answer = await axios.put(`/api/advert/${id}`, data, {
    headers: {
      Authorization: token,
    },
  });
  return answer.data;
}
export async function doInactiveAdvert(id, data) {
  const token = getToken();
  const answer = await axios.put(`/api/advert/activity/${id}`, data, {
    headers: {
      Authorization: token,
    },
  });
  return answer.data;
}

export async function createChat() {
  const lang = getCurrentLanguage();
  const token = getToken();
  const answer = await axios.post(
    `/api/ai-chat/`,
    { lang },
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return answer.data;
}
export async function sendMessage(message) {
  const token = getToken();
  const answer = await axios.put(
    `/api/ai-chat/`,
    { message: message },
    {
      headers: {
        Authorization: token,
      },
    }
  );
  return answer.data;
}
export async function getChat() {
  const token = getToken();
  const answer = await axios.get(`/api/ai-chat/`, {
    headers: {
      Authorization: token,
    },
  });
  return answer.data;
}
export async function deleteChat() {
  const token = getToken();
  const answer = await axios.delete(`/api/ai-chat/`, {
    headers: {
      Authorization: token,
    },
  });
  return answer.data;
}

export async function getMetabaseIframe() {
  const token = getToken();
  const answer = await axios.get(`/api/metabase/`, {
    headers: {
      Authorization: token,
    },
  });
  return answer.data;
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

export const setAuthHeader = () => {
  const token = getToken();
  axios.defaults.headers.Authorization = `Bearer ${token}`;
};

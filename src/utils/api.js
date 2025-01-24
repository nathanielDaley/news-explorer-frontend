const BASE_URL = "http://localhost:3003";
const BASE_HEADERS = { "Content-Type": "application/json" };

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Error sending fetch request: ${res.status}`);
};

const request = (url, options) => {
  return fetch(url, options).then(checkResponse);
  // return new Promise((resolve, reject) => {
  //   reject("Error test");
  // });
};

export { BASE_URL, BASE_HEADERS, checkResponse, request };

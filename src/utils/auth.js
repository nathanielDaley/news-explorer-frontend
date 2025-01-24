const lastUsername = "";
const lastEmail = "";

const register = (username, email, password) => {
  lastUsername = username;
  return new Promise((resolve, reject) => {
    resolve({
      data: { _id: "fake-id", name: username, email: email },
    });
  });
};

const authorize = (email, password) => {
  return new Promise((resolve, reject) => {
    resolve({ token: "a fake token" });
  });
};

const validateLogin = (token) => {
  return new Promise((resolve, reject) => {
    resolve({
      data: { _id: "fake-id", name: lastUsername, email: lastEmail },
    });
  });
};

export { register, authorize, validateLogin };

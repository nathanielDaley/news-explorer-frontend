const lastUsername = "";
const lastEmail = "";

const register = (username, email, password) => {
  lastUsername = username;
  return new Promise((resolve, reject) => {
    resolve({
      user: { _id: "fake-id", name: username, email: email },
    });
  });
};

const authorize = (email, password) => {
  if (lastUsername !== "" && lastEmail !== "") {
    return new Promise((resolve, reject) => {
      resolve({ token: "a fake token" });
    });
  }
  return new Promise((resolve, reject) => {
    reject("you haven't registered yet");
  });
};

const validateLogin = (token) => {
  return new Promise((resolve, reject) => {
    resolve({
      user: { _id: "fake-id", name: lastUsername, email: lastEmail },
    });
  });
};

export { register, authorize, validateLogin };

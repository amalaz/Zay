import http from "./httpService";
import config from "./config.json";

const registerUser = (user) => {
  return http.post(`${config.topleantapi}/api/register`, JSON.stringify(user));
};

export default registerUser;

export const loginUser = (user) => {
  return http.post(`${config.toplearnapi}/api/login`, JSON.stringify(user));
};

import http from "./httpService";
import config from "./config.json";

export const registerUser = (user: any) => {
    return http.post(`${config.localapi}/api/register`, JSON.stringify(user));
};

export const loginUser = (user: any) => {
    return http.post(`${config.localapi}/api/login`, JSON.stringify(user));
};

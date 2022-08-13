import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (username, password) => {
    const {data} = await $host.post('api/user/register', {username, password});
    return data;
}

export const login = async (username, password) => {
    const {data} = await $host.post('api/user/login', {username, password});
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
}

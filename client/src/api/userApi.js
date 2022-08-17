import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (username, password) => {
    const {data} = await $host.post('api/auth/register', {username, password});
    return data;
}

export const login = async (username, password) => {
    const {data} = await $host.post('api/auth/login', {username, password});
    localStorage.setItem('token', data.jwt_token);
    return jwt_decode(data.jwt_token);
}

export const getUserInfo = async () => {
    const {data} = await $authHost.get('api/users/me');
    return data;
}

export const deleteUserProfile = async () => {
    await $authHost.delete('api/users/me');
}

export const changeUserPassword = async (oldPassword, newPassword, user) => {
    await $authHost.patch('api/users/me', {oldPassword, newPassword, user});
}


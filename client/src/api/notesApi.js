import {$authHost} from "./index";

export const getUserNotes = async () => {
    const {data} = await $authHost.get('api/notes');
    return data;
}

export const addUserNote = async (text) => {
    const {data} = await $authHost.post('api/notes', {text});
    return data;
}

export const updateUserNote = async (id, text) => {
    const {data} = await $authHost.put(`api/notes/${id}`, {text});
    return data;
}

export const checkUserNote = async (id) => {
    return await $authHost.patch(`api/notes/${id}`);
}

export const deleteUserNote = async (id) => {
    return await $authHost.delete(`api/notes/${id}`);
}







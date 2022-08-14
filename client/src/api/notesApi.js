import {$authHost} from "./index";

export const getUserNotes = async () => {
    const {data} = await $authHost.get('api/notes');
    return data;
}

export const addUserNote = async () => {

}

export const getOneUserNote = async () => {

}

export const updateUserNote = async () => {

}

export const checkUserNote = async () => {

}

export const deleteUserNote = async () => {

}






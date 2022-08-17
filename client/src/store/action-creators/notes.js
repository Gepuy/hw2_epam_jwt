import {ActionTypes} from "../consts/ActionTypes";
import {addUserNote, checkUserNote, deleteUserNote, getUserNotes, updateUserNote} from "../../api/notesApi";

export const setUserNotes = (notes=null) => {
    return async (dispatch) => {
        let response = await getUserNotes();
        dispatch({type: ActionTypes.SET_USER_NOTES, payload: response.notes});
    }
}

export const addNewUserNote = (text) => {
    return async (dispatch) => {
        await addUserNote(text);
        dispatch(setUserNotes());
    }
}

export const editUserNote = (id, text) => {
    return async (dispatch) => {
        await updateUserNote(id, text);
        dispatch(setUserNotes());
    }
}

export const completeUserNote = (id) => {
    return async (dispatch) => {
        await checkUserNote(id);
        dispatch(setUserNotes());
    }
}

export const removeUserNote = (id) => {
    return async (dispatch) => {
        await deleteUserNote(id);
        dispatch({type: ActionTypes.DELETE_USER_NOTE, payload: id})
    }
}


export const setLoading = (state) => ({type: ActionTypes.SET_NOTES_LOADING, payload: state})

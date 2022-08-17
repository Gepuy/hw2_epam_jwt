import {ActionTypes} from "../consts/ActionTypes";

const initialValue = {
    userNotes: [],
    loading: false
}
export const notesReducer = (state=initialValue, action) => {
    switch (action.type) {
        case (ActionTypes.SET_USER_NOTES):
            return {...state, userNotes: action.payload};
        case (ActionTypes.DELETE_USER_NOTE):
            return {...state, userNotes: state.userNotes.filter(note => note._id !== action.payload)};
        case (ActionTypes.SET_NOTES_LOADING):
            return {...state, loading: action.payload}
        default:
            return state
    }
}


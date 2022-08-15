import {ActionTypes} from "../consts/ActionTypes";

const initialValue = {
    user: {},
    isAuth: false
}
export const userReducer = (state=initialValue, action) => {
    switch (action.type) {
        case (ActionTypes.SET_USER_PROFILE):
            return {...state, user: action.payload};
        case (ActionTypes.SET_USER_AUTH_STATUS):
            return {...state, isAuth: action.payload};
        default:
            return state
    }
}


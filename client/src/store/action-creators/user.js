import {deleteUserProfile, getUserInfo} from "../../api/userApi";
import {ActionTypes} from "../consts/ActionTypes";

export const getAuthUserData = () => {
    return async (dispatch) => {
        let response = await getUserInfo();
        dispatch({type: ActionTypes.SET_USER_PROFILE, payload: response.user})
    }
}

export const setUserAuthStatus = (status) => ({
    type: ActionTypes.SET_USER_AUTH_STATUS,
    payload: status
})

export const logout = () => {
    return dispatch => {
        localStorage.removeItem('token');
        dispatch({type: ActionTypes.SET_USER_PROFILE, payload: {}});
        dispatch(setUserAuthStatus(false));
    }
}

export const deleteAccount = () => {
    return async dispatch => {
        await deleteUserProfile();
        dispatch({type: ActionTypes.SET_USER_PROFILE, payload: {}});
        dispatch(setUserAuthStatus(false));
    }
}

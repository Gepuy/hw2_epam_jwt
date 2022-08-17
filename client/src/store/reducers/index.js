import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {notesReducer} from "./notesReducer";

export const rootReducers = combineReducers({
    user: userReducer,
    notes: notesReducer
});

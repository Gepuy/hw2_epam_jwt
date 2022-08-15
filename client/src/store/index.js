import {applyMiddleware, createStore, compose} from "redux";
import thunk from "redux-thunk";
import {rootReducers} from "./reducers";

import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'main-root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducers);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));

export const Persistor = persistStore(store);

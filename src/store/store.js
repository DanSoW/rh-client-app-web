import { combineReducers, configureStore } from "@reduxjs/toolkit";

import authReducer from "../store/reducers/AuthSlice";
import configReducer from "../store/reducers/ConfigSlice";
import adminReducer from "./reducers/AdminSlice";
import userReducer from "./reducers/UserSlice";
import companyReducer from "./reducers/CompanySlice";
import projectReducer from "./reducers/ProjectSlice";
import storageConfig from "../configs/store.config.json";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

/* Главный Reducer */
const rootReducer = combineReducers({
    authReducer,
    configReducer,
    adminReducer,
    userReducer,
    companyReducer,
    projectReducer
});

const persistConfig = {
    key: storageConfig["main-store"],
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
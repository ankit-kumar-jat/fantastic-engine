import { combineReducers, configureStore } from "@reduxjs/toolkit";
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
// import { setupListeners } from '@reduxjs/toolkit/query'
import counterReducer from "../features/counter/counterSlice";
import { pokemonApi } from "redux/services/pokemon";

const persistConfig = {
  key: "root",
  version: 1,
  storage, // you can provide other storage like indexdb, check https://github.com/rt2zz/redux-persist#storage-engines
  whitelist: ["todo"], // add reducers that you want to persist
};

const rootReducer = combineReducers({
  counter: counterReducer,

  // rtk-query reducers
  // Add the generated reducer as a specific top-level slice
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(pokemonApi.middleware),
});

export let persistor = persistStore(store);

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
// setupListeners(store.dispatch)

export default store;

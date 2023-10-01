import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";
import { persistReducer} from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, taskReducer);

const store = configureStore({
  reducer: {
    task: persistedReducer,
  },
});

export default store ;

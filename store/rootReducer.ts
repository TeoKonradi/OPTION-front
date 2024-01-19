import { combineReducers, configureStore } from "@reduxjs/toolkit";

import AccessTokenSlice from "./AccessTokenSlice";
import FilesSlice from "./FilesSlice";
import LoginStatus from "./LoginStatus";
import OptionsBarSlice from "./OptionsBarSlice";
import PageDescriptionSlice from "./PageDescriptionSlice";
import SizeSlice from "./SizeSlice";
import ToogleScroll from "./ToogleScrollSlice";
import ItemsListSlice from "./itemsListSlice";
// import storage from "redux-persist/lib/storage";
// import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
  accessToken: AccessTokenSlice,
  files: FilesSlice,
  itemsList: ItemsListSlice,
  loginStatus: LoginStatus,
  optionsBar: OptionsBarSlice,
  pageDesc: PageDescriptionSlice,
  sizes: SizeSlice,
  toogleScroll: ToogleScroll,
});

// const persistConfig = {
//   key: "root",
//   storage: storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: ["persist/PERSIST"],
//       },
//     }),
// });

// export const persistor = persistStore(store);

const store = configureStore({
  reducer: rootReducer,
});

// export default rootReducer;

export default store;

export type RootState = ReturnType<typeof rootReducer>;

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import ToogleScroll from './ToogleScrollSlice';
import ItemsListSlice from './itemsListSlice';
import OptionsBarSlice from './OptionsBarSlice';
import PageDescriptionSlice from './PageDescriptionSlice';
import AccessTokenSlice from './AccessTokenSlice';
import LoginStatus from './LoginStatus';
import FilesSlice from './FilesSlice';
import SizeSlice from './SizeSlice';
// import storage from "redux-persist/lib/storage";
// import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
  toogleScroll: ToogleScroll,
  itemsList: ItemsListSlice,
  optionsBar: OptionsBarSlice,
  sizes: SizeSlice,
  pageDesc: PageDescriptionSlice,
  accessToken: AccessTokenSlice,
  loginStatus: LoginStatus,
  files: FilesSlice,
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

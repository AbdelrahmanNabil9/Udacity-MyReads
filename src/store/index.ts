import { booksSlice } from "./slices/bookSlice";
import { authanticationSlice } from "./slices/authanticationSlice";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
const store = configureStore({
  reducer: {
    books: booksSlice.reducer,
    auth: authanticationSlice.reducer,
  },
});
export function getStoreWithState(preloadedState?: RootState) {
  const reducer = {
    books: booksSlice.reducer,
    auth: authanticationSlice.reducer,
  };
  return configureStore({ reducer, preloadedState });
}
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;

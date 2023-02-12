import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {combineReducers} from "redux";
import {store} from "..";

import computerSlice from "./reducers/computerSlice";
import projectsSlice from "./reducers/projectsSlice";

export type RootReducerType = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootReducerType> = useSelector;

export const rootReducer = combineReducers({
  computerSlice,
  projectsSlice,
});

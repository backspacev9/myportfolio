import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import App from "./App";
import {rootReducer} from "./redux/rootReducer";
import reportWebVitals from "./reportWebVitals";

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware,
  //devTools: process.env.NODE_ENV !== 'production',
});
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

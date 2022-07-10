import { combineReducers } from "@reduxjs/toolkit";
import { addressReducer } from "./addresse";

export const rootReducer = combineReducers({
  addresses: addressReducer,
});


export type RootReducerType = typeof rootReducer

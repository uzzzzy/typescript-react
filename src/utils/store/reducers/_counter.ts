// counter app reducer
import {
  createSlice,
  // PayloadAction,
} from "@reduxjs/toolkit";

import * as actions from "../actions/_counter";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: actions,
});

export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset,
} = counterSlice.actions;

export const counterReducer = counterSlice.reducer;

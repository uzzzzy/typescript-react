import { CounterState } from "../reducers/_counter";

export const increment = (state: CounterState) => {
  state.value += 1;
};

export const decrement = (state: CounterState) => {
  state.value -= 1;
};

export const incrementByAmount = (
  state: CounterState,
  action: { payload: number }
) => {
  state.value += action.payload;
};

export const decrementByAmount = (
  state: CounterState,
  action: { payload: number }
) => {
  state.value -= action.payload;
};

// reset
export const reset = (state: CounterState) => {
  state.value = 0;
};

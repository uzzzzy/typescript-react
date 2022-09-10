import store from "../store";

declare global {
  // redux state types
  type RootState = ReturnType<typeof store.getState>;

  // redux action types
  type AppDispatch = typeof store.dispatch;

  // redux component types
  interface ComponentDispatchProps {
    dispatch: AppDispatch;
  }
}

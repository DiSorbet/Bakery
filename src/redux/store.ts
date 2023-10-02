import { configureStore } from "@reduxjs/toolkit";
import cakes from "./Cakes/Slice";
import cart from "./Cart/Slice";

export const store = configureStore({
  reducer: {
    cakes,
    cart,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

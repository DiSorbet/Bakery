import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { RootState } from "../store";
import { getLsItems } from "../../utils/LocalStorageUtils";
import { CartSliceStateType, CartItemType } from "./Cart.types";

const initialState: CartSliceStateType = getLsItems();

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      let findItem: CartItemType | undefined;
      if (action.payload.category === "Bento") {
        findItem = state.cartItems.find(
          (obj: CartItemType) =>
            obj.title === action.payload.title &&
            obj.cream === action.payload.cream &&
            obj.biscuit === action.payload.biscuit
        );
      }
      if (action.payload.category === "Tort") {
        findItem = state.cartItems.find(
          (obj: CartItemType) =>
            obj.title === action.payload.title &&
            obj.price === action.payload.price
        );
      } else if (action.payload.category === "Dessert") {
        findItem = state.cartItems.find(
          (obj: CartItemType) =>
            obj.title === action.payload.title &&
            obj.amount === action.payload.amount
        );
      }

      if (findItem && findItem.count) {
        findItem.count++;
      } else {
        state.cartItems.push({
          ...action.payload,
          id: nanoid(),
          count: 1,
        });
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    ManageWindow: (state, action) => {
      state.isCartOpen = action.payload;
    },
    RemoveProduct: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    IncreaseAmount: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (cartItem && cartItem.count) {
        cartItem.count++;
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    DecreaseAmount: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (cartItem && cartItem.count && cartItem.count > 1) {
        cartItem.count--;
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
  },
});

export const selectCart = (state: RootState) => state.cart;
export const {
  AddToCart,
  DecreaseAmount,
  ManageWindow,
  RemoveProduct,
  IncreaseAmount,
} = CartSlice.actions;
export default CartSlice.reducer;
export { CartSlice };

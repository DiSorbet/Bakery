import { CartItemType } from "../redux/Cart/Cart.types";

export function getLsItems() {
  const data = localStorage.getItem("cart");
  const items = data ? JSON.parse(data) : [];
  return {
    cartItems: items as CartItemType[],
    isCartOpen: false,
  };
}

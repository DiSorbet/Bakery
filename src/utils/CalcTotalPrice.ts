import { CartItemType } from "../redux/Cart/Cart.types";

export function CalcTotalPrice(items: CartItemType[]) {
  return items
    .map((item) => Number(item.price) * Number(item.count))
    .reduce((a: number, b: number) => a + b);
}

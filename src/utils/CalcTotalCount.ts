import { CartItemType } from "../redux/Cart/Slice";

export function CalcTotalCount(items: CartItemType[]) {
  return items.map((item) => Number(item.count)).reduce((a, b) => a + b, 0);
}

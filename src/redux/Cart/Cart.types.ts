export type CartItemType = {
    id: string;
    title: string;
    price: number;
    imgSet: { url: string };
    category: string;
    cream?: string;
    biscuit?: string;
    amount?: number;
    berries?: string;
    berriesPrice?: number;
    candles?: string;
    candlesPrice?: number;
    count?: number;
  };
  
  export type CartSliceStateType = {
    cartItems: CartItemType[];
    isCartOpen: boolean;
  };
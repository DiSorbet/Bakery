
export type CakeType = {
    amount: number[];
    price: number;
    berries: { Да: number; Нет: number }[];
    candles: { Нет: number; Маленькие: number; Большие: number }[];
    setCake: React.Dispatch<
      React.SetStateAction<{
        id: string;
        title: string;
        amount: number;
        berries: string;
        candles: string;
        berriesPrice: number;
        candlesPrice: number;
        price: number;
        imgSet: {
          url: string;
        };
        category: string;
      }>
    >;
  };
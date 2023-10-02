export type DessertProps = {
  amount: number[];
  setDessert: React.Dispatch<
    React.SetStateAction<{
      id: string;
      title: string;
      price: number;
      amount: number;
      imgSet: {
        url: string;
      };
      category: string;
    }>
  >;
};

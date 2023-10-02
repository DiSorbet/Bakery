export type CakeType = {
    id: string;
    title: string;
    subtitle: string;
    price: number;
    category: string;
    imgSet: { url: string }[];
    amount?: {}[];
  };
  
  export type CakesSliceState = {
    items: CakeType[];
    status: "loading" | "success" | "error";
  };
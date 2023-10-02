export type ProductsProps = {
  category: string;
  title: string;
};

export type ProductType = {
  title: string;
  price: number;
  id: string;
  imgSet: { url: string }[];
};

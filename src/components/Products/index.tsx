import styles from "./Products.module.scss";
import Product from "../Product";
import { useSelector } from "react-redux";
import { selectCakesData } from "../../redux/Cakes/Slice";
import { ProductsProps } from "./Products.types";

const Products = ({ category, title }: ProductsProps) => {
  const { items } = useSelector(selectCakesData);
  return (
    <>
      <h1 className={styles.title}>{title}</h1>

      <section className={styles.products}>
        {category === "All"
          ? items.map((item) => {
              return <Product key={item.id} {...item} />;
            })
          : items
              .filter((item) => item.category === `${category}`)
              .map((item) => {
                return <Product key={item.id} {...item} />;
              })}
      </section>
    </>
  );
};

export default Products;

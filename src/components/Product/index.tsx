import React from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.scss";
import { useNavigate } from "react-router-dom";
import { ProductType } from "../Products/Products.types";
import { useSelector } from "react-redux";
import { selectCakesData } from "../../redux/Cakes/Slice";
import Skeleton from "../Skeleton";

const Product = ({ title, price, id, imgSet }: ProductType) => {
  const { status } = useSelector(selectCakesData);
  const [switchImg, setSwitchImg] = React.useState(false);
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`/${id}`);
  };
  if (status === "loading") {
    return <Skeleton />;
  }
  return (
    <div className={styles.root}>
      <Link className={styles.link} to={`/${id}`}>
        <img
          onMouseEnter={() => setSwitchImg(true)}
          onMouseLeave={() => setSwitchImg(false)}
          src={imgSet[switchImg ? 1 : 0].url}
          alt={title}
        />
      </Link>

      <div className={styles.info}>
        <h1>{title}</h1>
        <h1>{price}рублей</h1>
      </div>
      <button
        onClick={() => handleClick(id)}
        className={`${styles.btn} ${styles.btn1}`}
      >
        <Link className={styles.link} to={`/${id}`}>
          Подробнее
        </Link>
      </button>
    </div>
  );
};

export default Product;

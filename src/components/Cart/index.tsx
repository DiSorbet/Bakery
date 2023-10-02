import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./Cart.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { ManageWindow, selectCart } from "../../redux/Cart/Slice";
import { nanoid } from "nanoid";
import CartItem from "../CartItem";
import { CalcTotalPrice } from "../../utils/CalcTotalPrice";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(selectCart);
  const [totalPrice, setTotalPrice] = React.useState(0);

  React.useEffect(() => {
    if (cartItems.length > 0) {
      const itemsPrice = CalcTotalPrice(cartItems);
      setTotalPrice(itemsPrice);
    }
  }, [cartItems]);
  if (cartItems.length < 1) {
    return (
      <div className={styles.root}>
        <h1> Корзина пуста </h1>
        <AiOutlineClose
          onClick={() => dispatch(ManageWindow(false))}
          className={styles.icon}
        />
      </div>
    );
  }
  return (
    <div className={styles.root}>
      <h1>Ваш заказ</h1>
      <hr />

      <AiOutlineClose
        className={styles.icon}
        onClick={() => dispatch(ManageWindow(false))}
      />
      <div className={styles.items}>
        {cartItems.map((item) => {
          return <CartItem {...item} key={nanoid()} />;
        })}
      </div>
      <hr />
      <div className={styles.cartTotal}>
        <h4>
          {" "}
          Итоговая сумма:{" "}
          <span>
            {totalPrice.toLocaleString("ru-RU", { useGrouping: true })}рублей
          </span>
        </h4>
      </div>
    </div>
  );
};

export default Cart;

import styles from "./CartItem.module.scss";
import {
  AiOutlineCloseCircle,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import {
  CartItemType,
  RemoveProduct,
  IncreaseAmount,
  DecreaseAmount,
} from "../../redux/Cart/Slice";
import { useDispatch } from "react-redux";

const CartItem = ({
  imgSet,
  id,
  title,
  category,
  price,
  cream,
  biscuit,
  amount,
  candles,
  berries,
  count,
}: CartItemType) => {
  const dispatch = useDispatch();

  const countSum = (count: number | undefined, price: number) => {
    return (count !== undefined && count * price).toLocaleString("ru-RU", {
      useGrouping: true,
    });
  };

  return (
    <div className={styles.root}>
      <AiOutlineCloseCircle
        className={styles.icon}
        onClick={() => dispatch(RemoveProduct(id))}
      />
      <img src={imgSet.url} />
      {/* { desserts options */}
      {category == "Dessert" && (
        <div className={styles.info}>
          <h2>{title}</h2>
          <h2> Цена: {countSum(count!, price)} рублей</h2>
          {amount && <h2>Количество:{amount}</h2>}
        </div>
      )}

      {/* bento options */}
      {category == "Bento" && (
        <div className={styles.info}>
          <h2>{title}</h2>
          <h2>Цена: {countSum(price, count!)}рублей</h2>
          <h2>Крем: {cream} </h2>
          <h2>Бисквит: {biscuit} </h2>
        </div>
      )}

      {category == "Tort" && (
        <div className={styles.info}>
          <h2>{title}</h2>
          <h2>Цена: {countSum(price, count!)}рублей</h2>
          <h2>Размер: {amount} кг</h2>
          <h2>Добавить ягоды: {berries} </h2>
          <h2>Добавить свечи: {candles} </h2>
        </div>
      )}

      <div className={styles.buttonContainer}>
        <button onClick={() => dispatch(IncreaseAmount(id))}>
          <AiOutlinePlus />
        </button>
        <h1>{count}</h1>
        <button onClick={() => dispatch(DecreaseAmount(id))}>
          <AiOutlineMinus />
        </button>
      </div>
    </div>
  );
};

export default CartItem;

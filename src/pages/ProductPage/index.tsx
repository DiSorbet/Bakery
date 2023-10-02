import React from "react";
import axios from "axios";
import styles from "./ProductPage.module.scss";
import Images from "../../components/Images";
import { useNavigate, useParams } from "react-router-dom";
import DessertsOptions from "../../components/DessertOptions";
import CakesOptions from "../../components/CakeOptions";
import BentoOptions from "../../components/BentoOptions";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart, selectCart } from "../../redux/Cart/Slice";

type ItemType = {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  category: "Bento" | "Macarons" | "Cupcake" | "Tartaletka" | "Tort";
  price: number;
  biscuit: string[];
  cream: string[];
  berries?: { Да: number; Нет: number }[];
  amount?: number[];
  candles?: { Нет: number; Маленькие: number; Большие: number }[];
  imgSet: { url: string }[];
};

const ProductPage = () => {
  const dispatch = useDispatch();
  const [item, setItem] = React.useState<ItemType>();
  const { id } = useParams();
  const navigate = useNavigate();
  React.useEffect(() => {
    async function fetchItem() {
      try {
        const { data } = await axios.get(
          "https://64a5256600c3559aa9bf24ab.mockapi.io/bakery/" + id
        );
        setItem(data);
      } catch (error) {
        console.log("Произошла ошибка при загрузке ");
        navigate("/");
      }
    }
    fetchItem();
  }, []);

  // state for bento
  const [bento, setBento] = React.useState({
    id: "",
    title: "",
    price: 1590,
    biscuit: "",
    cream: "",
    imgSet: { url: "" },
    category: "",
  });
  // state for desserts
  const [isDessertType, setIsDesertType] = React.useState(false);
  const [dessert, setDessert] = React.useState({
    id: "",
    title: "",
    price: 0,
    amount: 0,
    imgSet: { url: "" },
    category: "",
  });

  // state for cake
  const [cake, setCake] = React.useState({
    id: "",
    title: "",
    amount: 1,
    berries: "",
    candles: "",
    berriesPrice: 0,
    candlesPrice: 0,
    price: 0,
    imgSet: { url: "" },
    category: "",
  });

  React.useEffect(() => {
    if (item) {
      if (item.category === "Bento") {
        setBento({
          id: item.id,
          title: item.title,
          price: item.price,
          biscuit: item.biscuit[0],
          cream: item.cream[0],
          imgSet: item.imgSet[0],
          category: item.category,
        });
      }
      if (item.category === "Tort") {
        if (
          item.berries !== undefined &&
          item.amount !== undefined &&
          item.candles !== undefined
        ) {
          setCake({
            id: item.id,
            title: item.title,
            price: item.price,
            berries: Object.keys(item.berries[0]).toString(),
            candles: Object.keys(item.candles[0]).toString(),
            berriesPrice: Number(Object.values(item.berries[0])),
            candlesPrice: Number(Object.values(item.candles[0])),
            amount: Number(Object.keys(item.amount[0]).join()),
            imgSet: item.imgSet[0],
            category: item.category,
          });
        }
      }
      if (
        item.category === "Macarons" ||
        item.category === "Cupcake" ||
        item.category === "Tartaletka"
      ) {
        setIsDesertType(true);
        if (item.amount !== undefined) {
          const amountKeys = Number(Object.keys(item.amount[0]).join());
          setDessert({
            id: item.id,
            title: item.title,
            price: item.price,
            amount: amountKeys,
            imgSet: item.imgSet[0],
            category: "Dessert",
          });
        }
      }
    }
  }, [item]);

  React.useEffect(() => {
    let newPrice = 3400 * cake.amount + cake.berriesPrice + cake.candlesPrice;
    console.log(`${(cake.amount, cake.berries, cake.candles)}`);

    setCake({ ...cake, price: newPrice });
  }, [cake.amount, cake.berries, cake.candles]);

  if (item) {
    return (
      <div className={styles.root}>
        <Images imgSet={item.imgSet} />
        <div className={styles.info}>
          <h1>{item.title}</h1>
          {isDessertType && <h1>{dessert.price} рублей</h1>}
          {item.category === "Bento" && <h1>{bento.price} рублей</h1>}
          {item.category === "Tort" && <h1>{cake.price} рублей </h1>}

          <div className={styles.select}>
            {isDessertType && (
              <>
                <DessertsOptions
                  setDessert={setDessert}
                  amount={item.amount!}
                />
                <button onClick={() => dispatch(AddToCart(dessert))}>
                  {" "}
                  Добавить в корзину
                </button>
              </>
            )}
            {item.category === "Tort" && (
              <>
                <CakesOptions
                  setCake={setCake}
                  price={item.price}
                  candles={item.candles!}
                  berries={item.berries!}
                  amount={item.amount!}
                />
                <button onClick={() => dispatch(AddToCart(cake))}>
                  {" "}
                  Добавить в корзину
                </button>
              </>
            )}
            {item.category === "Bento" && (
              <>
                <BentoOptions
                  setBento={setBento}
                  cream={item.cream}
                  biscuit={item.biscuit}
                />
                <button onClick={() => dispatch(AddToCart(bento))}>
                  {" "}
                  Добавить в корзину
                </button>
              </>
            )}
          </div>

          <p>{item.subtitle || item.desc} </p>
        </div>
      </div>
    );
  }
};

export default ProductPage;

import React from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCakesItems } from "./redux/Cakes/Slice";
import Navbar from "./components/Navbar";
import AllCakes from "./pages/AllCakes";
import Home from "./pages/Home";
import BentoCakes from "./pages/BentoCakes";
import Cakes from "./pages/Cakes";
import Desserts from "./pages/Desserts";
import Macarons from "./pages/Macaroons";
import Error from "./pages/Error";
import ProductPage from "./pages/ProductPage";
import { AppDispatch } from "./redux/store";
import Cart from "./components/Cart";
import { selectCart } from "./redux/Cart/Slice";

const App = () => {
  const { isCartOpen } = useSelector(selectCart);
  const dispatch: AppDispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchCakesItems());
  }, []);
  return (
    <>
      <Navbar />
      {isCartOpen && <Cart />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="allcakes" element={<AllCakes />} />
        <Route path="desserts" element={<Desserts />} />
        <Route path="cakes" element={<Cakes />} />
        <Route path="bento" element={<BentoCakes />} />
        <Route path="makaroons" element={<Macarons />} />
        <Route path=":id" element={<ProductPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;

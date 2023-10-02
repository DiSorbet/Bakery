import Intro from "../components/Intro";
import Products from "../components/Products";

const AllCakes = () => {
  return (
    <>
      <Intro intro="allcakes">
        <h3>ТОРТЫ БЕЗ САХАРА И ГЛЮТЕНА</h3>
        <p>без лактозы | без сахара| без глютена</p>
      </Intro>
      <Products category="All" title="Десерты без сахара, глютена и лактозы" />
    </>
  );
};

export default AllCakes;

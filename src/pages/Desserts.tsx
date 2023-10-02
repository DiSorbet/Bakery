import Intro from "../components/Intro";
import Products from "../components/Products";

const Desserts = () => {
  return (
    <>
      <Intro intro="desserts">
        <h3>ДЕСЕРТЫ БЕЗ ГЛЮТЕНА И САХАРА</h3>
        <p>без лактозы | без молочных продуктов | без сахара</p>
      </Intro>
      <Products category="Cupcake" title="Капкейки без глютена и сахара" />
      <Products category="Tartaletka" title="Тарталетки глютена и сахара" />
    </>
  );
};

export default Desserts;

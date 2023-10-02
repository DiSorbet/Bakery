import Intro from "../components/Intro";
import Products from "../components/Products";

const Cakes = () => {
  return (
    <>
      <Intro intro="cakes">
        <h3>ТОРТЫ БЕЗ ГЛЮТЕНА И ЛАКТОЗЫ</h3>
        <p>без лактозы | без молочных продуктов | без глютена</p>
      </Intro>
      <Products category="Tort" title="Безглютеновые торты без сахара" />
    </>
  );
};

export default Cakes;

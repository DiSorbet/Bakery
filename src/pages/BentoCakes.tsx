import Intro from "../components/Intro";
import Products from "../components/Products";

const BentoCakes = () => {
  return (
    <>
      <Intro intro="bento">
        <h3>БЕНТО ТОРТЫ КУПИТЬ В МОСКВЕ</h3>
        <p>без сахара | без молочных продуктов | без глютена</p>
      </Intro>
      <Products category="Bento" title="БЕНТО ТОРТ С ДОСТАВКОЙ" />
    </>
  );
};

export default BentoCakes;

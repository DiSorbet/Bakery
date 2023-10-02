import Intro from "../components/Intro";
import Products from "../components/Products";

const Macarons = () => {
  return (
    <>
      <Intro  intro='macarons'>
        <h3>ПИРОЖНЫЕ МАКАРОНС БЕЗ ЯИЦ И ЛАКТОЗЫ</h3>
        <p>без лактозы | без молочных продуктов | без глютена</p>
      </Intro>
      <Products category='Macarons' title='МАКАРОНС С ДОСТАВКОЙ'/>
    </>
  );
};

export default Macarons;
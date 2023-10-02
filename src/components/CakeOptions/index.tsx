import { CakeType } from "./Cake.types";

const CakesOptions = ({ amount, berries, candles, setCake }: CakeType) => {
  const handleAmount = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value.split(",");
    setCake((prev) => ({ ...prev, amount: Number(selectedValue[0]) }));
  };

  const handleBerries = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value.split(",");
    setCake((prev) => ({
      ...prev,
      berries: selectedValue[0],
      berriesPrice: Number(selectedValue[1]),
    }));
  };

  const handleCandles = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value.split(",");
    setCake((prev) => ({
      ...prev,
      candles: selectedValue[0],
      candlesPrice: Number(selectedValue[1]),
    }));
  };
  return (
    <>
      <label htmlFor="size">Размер Торта</label>
      <select id="size" onChange={handleAmount}>
        {amount.map((obj, index: number) => {
          return (
            <option
              value={[Object.keys(obj), Object.values(obj)].toString()}
              key={index}
            >
              {Object.keys(obj)} кг
            </option>
          );
        })}
      </select>

      <label htmlFor="season_berries">Сезонные ягоды (+600руб)</label>
      <select id="season_berries" onChange={handleBerries}>
        {berries.map((obj, index: number) => {
          return (
            <option
              value={[Object.keys(obj), Object.values(obj)].toString()}
              key={index}
            >
              {Object.keys(obj)}
            </option>
          );
        })}
      </select>

      <label htmlFor="bday_candles">Набор свечей(+150руб/250руб)</label>
      <select id="bday_candles" onChange={handleCandles}>
        {candles.map((obj, index: number) => {
          return (
            <option
              value={[Object.keys(obj), Object.values(obj)].toString()}
              key={index}
            >
              {Object.keys(obj)}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default CakesOptions;

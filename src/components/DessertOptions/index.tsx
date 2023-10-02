import { DessertProps } from "./dessert.types";

const DessertsOptions = ({ amount, setDessert }: DessertProps) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    if (amount !== undefined) {
      const selectedValue = e.target.value.split(",");
      setDessert((prev) => ({
        ...prev,
        price: Number(selectedValue[1]),
        amount: Number(selectedValue[0]),
      }));
    }
  };
  return (
    <>
      <label htmlFor="amount"> Количество</label>
      <select id="amount" onChange={handleChange}>
        {amount.map((obj, index: number) => {
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

export default DessertsOptions;

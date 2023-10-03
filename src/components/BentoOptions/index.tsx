import { ItemType } from "../../pages/ProductPage";
import { BentoProps } from "./Bento.types";

const BentoOptions = ({ setBento, cream, biscuit }: BentoProps) => {
  return (
    <>
      <label htmlFor="size">Бисквит</label>
      <select
        id="size"
        onChange={(e) =>
          setBento((prev) => ({ ...prev, biscuit: e.target.value }))
        }
      >
        {biscuit.map((item, index: number) => {
          return (
            <option value={item} key={index}>
              {item}
            </option>
          );
        })}
      </select>

      <label htmlFor="season_berries">Крем</label>
      <select
        id="season_berries"
        onChange={(e) =>
          setBento((prev) => ({ ...prev, cream: e.target.value }))
        }
      >
        {cream.map((item, index: number) => {
          return (
            <option value={item} key={index}>
              {item}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default BentoOptions;

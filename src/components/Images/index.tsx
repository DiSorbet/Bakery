import React from "react";
import styles from "./Images.module.scss";
import { imagesProps } from "./Images.types";

const Images = ({ imgSet }: imagesProps) => {
  const [main, setMain] = React.useState(imgSet[0].url);
  return (
    <div className={styles.root}>
      <div className={styles.mainImg}>
        <img src={main} />
      </div>
      <div className={styles.gallery}>
        {imgSet.map((item: { url: string }, index: number) => {
          return (
            <img
              src={item.url}
              className={imgSet[index].url === main ? "active" : ""}
              key={index}
              alt="gallery img"
              onClick={() => setMain(imgSet[index].url)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Images;

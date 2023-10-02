import styles from "./Intro.module.scss";
import { IntroPropsType } from "./Intro.types";

const Intro = ({ children, intro }: IntroPropsType) => {
  const introClass = intro ? `${intro}` : "";
  return (
    <>
      <section className={`${styles.section} ${styles[introClass]}`}>
        <div className={styles.info}>{children}</div>
      </section>
    </>
  );
};

export default Intro;

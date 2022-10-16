import { FC } from "react";
import styles from "./Loader.module.scss";

// https://cssloaders.github.io/
export const Loader: FC = () => (
  <div className={styles.wrapper}>
    <span className={styles.loader}></span>
  </div>
);

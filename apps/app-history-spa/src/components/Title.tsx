import { FC } from "react";
import styles from "./Title.module.scss";

export const Title: FC<{ name?: string | null }> = ({ name }) => {
  const formattedName = name ? name[0].toUpperCase() + name.slice(1) : "";

  return (
    <h1 className={styles.title}>
      Salut <strong>{formattedName}</strong> 👋
    </h1>
  );
};

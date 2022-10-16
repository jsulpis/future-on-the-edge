import { FC, ReactNode } from "react";
import lambdaSvg from "../assets/lambda.svg";
import styles from "./LambdaInfo.module.scss";

type LambdaInfoProps = {
  name: string;
  children: ReactNode;
};

export const LambdaInfo: FC<LambdaInfoProps> = ({ name, children }) => (
  <div className={styles.wrapper}>
    <h2>
      <img src={lambdaSvg} alt="lambda icon" /> {name}
    </h2>
    <hr />

    {children}
  </div>
);

import { FC, ReactNode } from "react";
import styles from "./MainContent.module.scss";

type MainContentProps = {
  seed?: number;
  title: ReactNode;
  children: ReactNode;
};

export const MainContent: FC<MainContentProps> = ({
  seed,
  title,
  children,
}) => {
  const imgSrc = seed
    ? `https://picsum.photos/seed/${seed}/200`
    : `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"></svg>`;

  return (
    <main className={styles.main}>
      {title}

      <section>
        {children}
        <img src={imgSrc} alt="" className={styles.circle} />
      </section>

      <img src={imgSrc} alt="" className={styles.background} />
    </main>
  );
};

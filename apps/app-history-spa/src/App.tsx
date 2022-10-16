import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import { MainContent } from "./components/MainContent";
import { Title } from "./components/Title";
import { LambdaInfo } from "./components/LambdaInfo";
import styles from "./App.module.scss";
import { Loader } from "./components/Loader";

type ApiData = {
  timestamp: number;
  region: string;
};

function App() {
  const [apiData, setApiData] = useState<ApiData>();
  const [cacheStatus, setCacheStatus] = useState<string | null>();

  const name = new URL(window.location.toString()).searchParams.get("name");

  const formatter = new Intl.DateTimeFormat("fr", { timeStyle: "medium" });
  const apiDate = formatter.format(new Date(apiData?.timestamp || Date.now()));

  useEffect(() => {
    fetch("/api/date").then((response) => {
      setTimeout(async () => {
        setCacheStatus(response.headers.get("x-vercel-cache"));
        setApiData(await response.json());
      }, 300);
    });
  }, []);

  return (
    <>
      <MainContent title={<Title name={name} />} seed={apiData?.timestamp}>
        {apiData ? (
          <>
            <LambdaInfo name="Page">
              <dl className={styles.list}>
                <dt>Région</dt>
                <dd>CDN</dd>

                <dt>Mode de rendu</dt>
                <dd>
                  SPA (<img src={reactLogo} alt="SvelteKit logo" />)
                </dd>
              </dl>
            </LambdaInfo>

            <LambdaInfo name="API">
              <dl className={styles.list}>
                <dt>Région</dt>
                <dd>{apiData.region}</dd>

                <dt>Heure</dt>
                <dd>{apiDate}</dd>

                <dt>Cache</dt>
                <dd>{cacheStatus}</dd>
              </dl>
            </LambdaInfo>
          </>
        ) : (
          <Loader />
        )}
      </MainContent>
    </>
  );
}

export default App;

<script>
  import Title from "../lib/Title.svelte";
  import MainContent from "../lib/MainContent.svelte";
  import LambdaInfo from "../lib/LambdaInfo.svelte";
  import PhpLogo from "../lib/assets/php.svg";
  import JqueryLogo from "../lib/assets/jquery.svg";

  export let data;

  const formatter = new Intl.DateTimeFormat("fr", { timeStyle: "medium" });
  const apiDate = formatter.format(new Date(data.api.timestamp));
</script>

<MainContent seed={data.api.timestamp}>
  <Title name={data.name} slot="title" />

  <svelte:fragment slot="content">
    <LambdaInfo name="Page">
      <dl>
        <dt>Région</dt>
        <dd>{data.ssrRegion}</dd>

        <dt>Mode de rendu</dt>
        <dd>
          SSR (<img src={PhpLogo} alt="PHP logo" /> +
          <img src={JqueryLogo} alt="JQuery logo" />)
        </dd>
      </dl>
    </LambdaInfo>

    <LambdaInfo name="API">
      <dl>
        <dt>Région</dt>
        <dd>{data.api.region}</dd>

        <dt>Heure</dt>
        <dd>{apiDate}</dd>

        <dt>Cache</dt>
        <dd>{data.api.cacheStatus}</dd>
      </dl>
    </LambdaInfo>
  </svelte:fragment>
</MainContent>

<style lang="scss">
  dt {
    opacity: 0.7;
    font-size: 1.5rem;

    &:not(:first-child) {
      margin-top: 1.2rem;
    }
  }

  dd {
    font-weight: bold;
    font-size: 2rem;
  }

  dd img {
    height: 0.8em;
    margin-inline: 4px;
  }
</style>

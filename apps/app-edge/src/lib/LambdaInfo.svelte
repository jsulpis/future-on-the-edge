<script lang="ts">
  import lambdaSvg from "./assets/lambda.svg";

  export let name: string;
</script>

<div>
  <h2><img src={lambdaSvg} alt="lambda icon" class="lambda" /> {name}</h2>
  <hr />

  <slot />
</div>

<style lang="scss">
  .lambda {
    height: 0.7em;
  }

  h2 {
    font-size: 2.5rem;
  }

  hr {
    height: 2px;
    color: currentColor;
    border-radius: 2px;
    width: 70px;
    margin: 10px auto 30px;
  }
</style>

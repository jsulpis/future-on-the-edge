<script>
  import reloadIcon from "../assets/icons/reload.svg";

  export let url;

  let inputValue = url;
  let iframeElement;

  function reloadIframe() {
    iframeElement.src = inputValue + ""; // force to reload even with same url
  }
</script>

<div class="wrapper">
  <div class="header">
    <div class="dots">
      <span />
      <span />
      <span />
    </div>
    <button type="button" on:click={reloadIframe}>
      <img src={reloadIcon} alt="reload" class="reload" />
    </button>

    <form on:submit|preventDefault={reloadIframe}>
      <input type="text" bind:value={inputValue} />
    </form>
  </div>

  <iframe
    bind:this={iframeElement}
    data-src={url}
    frameborder="0"
    title="live demo"
  />
</div>

<style>
  .wrapper {
    height: calc(100% - 20px);
    margin-block: 10px;
    background: #111;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: var(--shadow-elevation-high),
      inset 1px 1px 0px rgba(255, 255, 255, 0.2);
    display: grid;
    grid-template-rows: auto minmax(0, 1fr);
  }

  form {
    flex-grow: 1;
  }

  button {
    background: transparent;
    border: 0;
    border-radius: 50%;
    cursor: pointer;
    padding: 4px;
    height: 32px;
    width: 32px;
    transition: background-color 100ms;
  }
  button:hover {
    background: #333;
  }
  button:active {
    background: #222;
  }

  input {
    background: #090909;
    color: white;
    font-size: 1.2rem;
    border: 0;
    width: 100%;
    padding: 0.5rem 1rem;
    border: 1px solid #222;
    border-radius: 8px;
    outline: none;
  }

  iframe {
    /* little hack because the app does not fit... */
    width: 110%;
    height: 110%;
    transform: scale(calc(10 / 11));
    transform-origin: top left;
  }

  .header {
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 0.5rem 0.5rem 0.5rem 1.2rem;
  }

  .dots {
    display: flex;
    gap: 8px;
  }

  .dots span {
    display: inline-block;
    background: red;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .dots span:nth-of-type(2) {
    background: orange;
  }

  .dots span:nth-of-type(3) {
    background: green;
  }
</style>

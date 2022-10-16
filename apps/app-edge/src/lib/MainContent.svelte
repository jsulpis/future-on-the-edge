<script lang="ts">
  export let seed: number;

  const imgSrc = `https://picsum.photos/seed/${seed}/200`;
</script>

<main>
  <slot name="title" />

  <section>
    <slot name="content" />
    <img src={imgSrc} alt="" class="circle" />
  </section>

  <img src={imgSrc} alt="" class="background" />
</main>

<style lang="scss">
  main {
    text-align: center;
    height: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding-bottom: 100px; // compensate for the picture which has absolute position and breaks centering
    background: radial-gradient(
      78.05% 78.05% at 50% 21.95%,
      rgba(0, 0, 0, 0) 45.32%,
      rgba(0, 0, 0, 0.5) 100%
    );
  }

  :global(body) {
    overflow: hidden;
  }

  section {
    position: relative;
    background: hsla(0deg 0% 0% / 0.15);
    display: inline-grid;
    grid-template-columns: 1fr 1fr;
    width: 90%;
    max-width: 800px;
    padding-block: 50px;
    border-radius: 16px;
    box-shadow: var(--shadow-elevation-medium),
      inset 1px 1px 0px rgba(255, 255, 255, 0.2);
  }

  img.circle {
    display: block;
    position: absolute;
    border-radius: 50%;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
    box-shadow: var(--shadow-elevation-high);
  }

  img.background {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(80px) brightness(50%);
    transform: scale(1.5);
  }
</style>

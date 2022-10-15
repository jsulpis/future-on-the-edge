<script lang="ts">
  export let name: string;

  $: formattedName = name ? name[0].toUpperCase() + name.slice(1) : "";
</script>

<h1>Salut <strong>{formattedName}</strong> 👋</h1>

<style>
  h1 {
    font-weight: normal;
    font-size: 3.5rem;
  }

  strong {
    font-weight: bold;
  }
</style>

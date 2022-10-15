<script>
  export let data;
</script>

<h1>Hello {data.name}!</h1>
<h2>Page:</h2>
<p>Region: {data.ssrRegion}</p>

<h2>API:</h2>
<p>Region: {data.api.region}</p>
<p>Time: {data.api.date}</p>
<p>Cache: {data.api.cacheStatus}</p>

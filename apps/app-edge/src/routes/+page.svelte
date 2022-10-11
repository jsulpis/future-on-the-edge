<script>
  export let data;

  const formatter = new Intl.DateTimeFormat("fr", { timeStyle: "medium" });

  const dateFormatted = formatter.format(new Date(data.date));
</script>

<h1>Hello {data.name}!</h1>
<p>Generated at {dateFormatted}</p>
<p>In {data.location}</p>

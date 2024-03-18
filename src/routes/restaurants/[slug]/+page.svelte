<script>
  import { get } from "$lib/dao/categories";

	/** @type {import('./$types').PageData} */
	export let data;

  const category = get(data.category);
</script>

<h1 class="mb-4 text-4xl font-extrabold leading-none text-slate">{data.name}</h1>
<div>
  Category: {category.displayName}
  <br />
	{#if data.website}
    Website: <a href="{data.website}">{data.website}</a>
  {/if}
  <br />
  {#if data.source}
    How we found it: {data.source}
  {/if}
</div>

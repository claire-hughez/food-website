<script lang="ts">
  import { base } from "$app/paths";
  import { getAll } from '$lib/dao/categories';
  import { getAllByCategory } from '$lib/dao/restaurants';

  const restaurantsByCategory = getAll().reduce((map, currentCategory) => {
    map.set(currentCategory, getAllByCategory(currentCategory.id));
    return map;
  }, new Map());
</script>

<svelte:head>
  <title>Our favourite places</title>
</svelte:head>

<h1 class="mb-4 text-2xl font-bold leading-none">The stand outs</h1>

<p>
  Just a big list of some of our favourite restaurants in London.
</p>

<div class="mx-4">
  {#each restaurantsByCategory as [category, restaurants]}
    <h2 class="mb-1 mt-2 text-lg font-bold">{category.displayName} {#if category.emoji}{category.emoji}{/if}</h2>
    <ul class="ml-2 list-disc list-inside">
      {#each restaurants as restaurant}
        <li><a href="{base}/restaurants/{restaurant.id}">{restaurant.name}</a></li>
      {/each}
    </ul>
  {/each}
</div>

<p class="my-4">Don't see your favourite restaurant on here? Drop us an email at
  <a href="mailto:food-referral@barnett.dev">food-referral@barnett.dev</a>, and
  we'll try to get round to checking it out.
</p>

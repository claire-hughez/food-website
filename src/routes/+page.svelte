<script lang="ts">
  import { categories } from '$lib/data/categories';
  import { getByCategory } from '$lib/dao/restaurants';

  const restaurantsByCategory = categories.reduce((map, currentCategory) => {
    map.set(currentCategory, getByCategory(currentCategory.id));
    return map;
  }, new Map());
</script>

<h1 class="mb-4 text-4xl font-extrabold leading-none text-slate">Our favourite places</h1>

<div class="mx-4">
  {#each restaurantsByCategory as [category, restaurants]}
    <h2 class="mb-1 mt-2 text-2xl font-bold text-slate">{category.displayName}</h2>
    <ul class="ml-2 list-disc list-inside">
      {#each restaurants as restaurant}
        <li>
          {#if restaurant.website}
            <a href="{restaurant.website}">{restaurant.name}</a>
          {:else}
            {restaurant.name}
          {/if}
        </li>
      {/each}
    </ul>
  {/each}
</div>

<p class="my-4">Don't see your favourite restaurant on here? Drop us an email at 
  <a href="mailto:food-referral@barnett.dev">food-referral@barnett.dev</a>, and
  we'll try to get round to checking it out.
</p>

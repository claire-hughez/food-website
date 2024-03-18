<script lang="ts">
  import { categories } from '$lib/data/categories';
  import { getByCategory } from '$lib/dao/restaurants';

  const restaurantsByCategory = categories.reduce((map, currentCategory) => {
    map.set(currentCategory, getByCategory(currentCategory.id));
    return map;
  }, new Map());
</script>

<h1 class="mb-4 text-4xl font-extrabold leading-none text-slate">Favourite Restaurants</h1>

<div class="mx-4">
  {#each restaurantsByCategory as [category, restaurants]}
    <h2 class="mb-1 mt-2 text-2xl font-bold text-slate">{category.displayName}</h2>
    <ul class="ml-2 list-disc list-inside">
      {#each restaurants as restaurant}
        <li>{restaurant.name}</li>
      {/each}
    </ul>
  {/each}
</div>

<script lang="ts">
  import { categories } from '$lib/data/categories';
  import { getByCategory } from '$lib/dao/restaurants';

  const restaurantsByCategory = categories.reduce((map, currentCategory) => {
    map.set(currentCategory, getByCategory(currentCategory.id));
    return map;
  }, new Map());
</script>

<h1>Favourite Restaurants</h1>

{#each restaurantsByCategory as [category, restaurants]}
  <h2>{category.displayName}</h2>
  <ul>
    {#each restaurants as restaurant}
      <li>{restaurant.name}</li>
    {/each}
  </ul>
{/each}

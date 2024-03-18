import { restaurants } from "$lib/data/restaurants"

export function getByCategory(category: string): Array<Restaurant> {
  return restaurants.filter(restaurant =>  restaurant.category === category);
};

export function find(id: string): Restaurant | undefined {
  return restaurants.find(element => element.id === id);
}

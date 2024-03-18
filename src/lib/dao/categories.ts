import { categories } from "$lib/data/categories"

export function getAll(): Array<Category> {
  return categories;
}

export function get(id: string): Category {
  const category = categories.find(element => element.id === id);
  if (category) {
    return category;
  } else {
    throw new Error(`Unable to find category with id ${id}`);
  }
}


export function find(id: string): Category | undefined {
  return categories.find(element => element.id === id);
}

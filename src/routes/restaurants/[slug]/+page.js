import { error } from '@sveltejs/kit';
import { find } from "$lib/dao/restaurants";

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  const restaurant = find(params.slug);
	if (typeof restaurant !== 'undefined') {
		return restaurant;
	}

	error(404, 'Not found');
}

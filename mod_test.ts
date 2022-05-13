import { assertEquals } from 'https://deno.land/std@0.139.0/testing/asserts.ts';

import randomJoke, {
	allJokes,
	jokeByID,
	jokesCategories,
	randomJokeByType,
	randomJokesByType,
	randomQuantityJokes,
} from './mod.ts';

Deno.test('Check export default', () => {
	assertEquals(typeof randomJoke().punchline, 'string');
});

Deno.test('Test Random Joke By Type', () => {
	const type = 'general';

	assertEquals(randomJokeByType(type).type, type);
});

Deno.test('Test Random Jokes By Type', () => {
	const type = 'programming';

	assertEquals(randomJokesByType(type, 1)[0].type, type);
});

Deno.test('Check Legnth of randomNJokes', () => {
	assertEquals(randomQuantityJokes(3).length, 3);
});

Deno.test('Check jokeByID', () => {
	const ID = 5;

	assertEquals(jokeByID(ID).id, ID);
});

Deno.test('Check if there are repeated ID\'s', () => {
	const jokes = allJokes();
	const ids = new Set();

	for (let index = 0; index < jokes.length; index++) {
		const currentId = jokes[index].id;
		if (ids.has(currentId)) throw new Error(`ID ${currentId} is repeated!`);
		ids.add(currentId);
	}
});

Deno.test('Check jokesCategories', () => {
	assertEquals(jokesCategories(), [
		'general',
		'knock-knock',
		'programming',
		'anime',
		'food',
		'dad',
	]);
});

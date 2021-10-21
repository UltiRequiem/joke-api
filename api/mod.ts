import { serve } from './deps.ts';

import {
	jokeByIdHandler,
	jokesCategoriesHandler,
	notFoundHandler,
	randomJokeHandler,
	randomJokeHandlerQuantity,
	randomJokesByTypeHandler,
} from './handlers.ts';

serve({
	'/': randomJokeHandler,
	'/:quantity': randomJokeHandlerQuantity,
	'/id/:number': jokeByIdHandler,
	'/type/:type/:quantity': randomJokesByTypeHandler,
	'/type/:type': randomJokesByTypeHandler,
	'/categories/all': jokesCategoriesHandler,
	404: notFoundHandler,
});

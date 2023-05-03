// a store is a global state that saves the entire info of the application
import { configureStore } from '@reduxjs/toolkit';

import { articleApi } from './article';

export const store = configureStore({
	reducer: {
		[articleApi.reducerPath]: articleApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(articleApi.middleware),
});



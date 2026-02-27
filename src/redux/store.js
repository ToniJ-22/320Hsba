import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from './games';
import favoritesReducer from './favorites';

export const store = configureStore({
  reducer: {
    games: gamesReducer,
    favorites: favoritesReducer,
  },
});

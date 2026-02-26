import { createSlice } from '@reduxjs/toolkit';

const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: savedFavorites,
  },
  reducers: {
    addFavorite: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.items));
    },
    removeFavorite: (state, action) => {
      state.items = state.items.filter((game) => game.id !== action.payload);
      localStorage.setItem('favorites', JSON.stringify(state.items));
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;

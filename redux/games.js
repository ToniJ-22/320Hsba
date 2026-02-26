import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGames = createAsyncThunk(
  'games/fetchGames',
  async (query) => {
    const API_KEY = import.meta.env.VITE_BGA_API_KEY;

    const res = await fetch(
      `https://api.boardgameatlas.com/api/search?name=${query}&categories=Kqxz9QYimK&min_players=4&max_playtime=30&client_id=${API_KEY}`
    );

    const data = await res.json();
    return data.games;
  }
);

const gamesSlice = createSlice({
  name: 'games',
  initialState: {
    list: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      });
  },
});

export default gamesSlice.reducer;

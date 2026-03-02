import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGames = createAsyncThunk(
  'games/fetchGames',
  async () => {
    const res = await fetch('https://www.cheapshark.com/api/1.0/deals');
    const data = await res.json();

    return data.slice(0, 12).map((game) => ({
      code: game.dealID,
      value: game.title,
      suit: game.storeID,
      image: game.thumb,
    }));
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
        state.list = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchGames.rejected, (state) => {
        state.status = 'failed';
        state.list = [];
      });
  },
});

export default gamesSlice.reducer;



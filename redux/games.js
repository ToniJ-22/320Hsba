import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchGames = createAsyncThunk(
  'games/fetchGames',
  async () => {
    try {
      const res = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=10');
      const data = await res.json();
      return data.cards;
    } catch (error) {
      console.error('Fetch error:', error);
      return [];
    }
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



import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = "JjP84CKefxzmg2fyAvN4zWsRyAAqg1nzrXvHdtc6";
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

export const fetchNasa = createAsyncThunk(
  "nasa/fetchNasa",
  async () => {
    const response = await fetch(API_URL);
    return response.json();
  }
);

const nasaSlice = createSlice({
  name: "nasa",
  initialState: {
    data: null,
    loading: false,
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNasa.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNasa.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchNasa.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch data";
      });
  }
});

export default nasaSlice.reducer;

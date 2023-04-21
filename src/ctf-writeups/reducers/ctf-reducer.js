import { createSlice } from "@reduxjs/toolkit";
import { findCTFEventThunk } from "../../services/ctf-thunks";

const initialState = {
  ctf: [],
  loading: false,
};

const ctfSlice = createSlice({
  name: "ctf",
  initialState,
  reducers: {},
  extraReducers: {
    [findCTFEventThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.ctf = payload;
    },
    [findCTFEventThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export default ctfSlice.reducer;

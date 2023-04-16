import { createSlice } from "@reduxjs/toolkit";

import {
  updateWriteup,
  createWriteup,
  deleteWriteup,
  findWriteups,
} from "../../services/writeups-service";
import { findWriteupsThunk } from "../../services/writeups-thunks";

const initialState = {
  writeups: [],
  loading: false,
};

const tuitsSlice = createSlice({
  name: "writeups",
  initialState,
  extraReducers: {
    [findWriteupsThunk.pending]: (state) => {
      state.loading = true;
      state.writeups = [];
    },
    [findWriteupsThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.writeups = payload;
    },
    [findWriteupsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
  reducers: {},
});

export default tuitsSlice.reducer;

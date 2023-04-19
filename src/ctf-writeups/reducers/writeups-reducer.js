import { createSlice } from "@reduxjs/toolkit";

import {
  updateWriteup,
  createWriteup,
  deleteWriteup,
  findWriteups,
} from "../../services/writeups-service";
import {
  findWriteupsThunk,
  deleteWriteupThunk,
  createWriteupThunk,
} from "../../services/writeups-thunks";

const initialState = {
  writeups: [],
  loading: false,
};

const writeupsSlice = createSlice({
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
    [deleteWriteupThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.writeups = state.writeups.filter((w) => w._id !== payload);
    },
    [createWriteupThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.writeups.push(payload);
    },
  },
  reducers: {},
});

export default writeupsSlice.reducer;

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
} from "../../services/writeups-thunks";

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
    [deleteWriteupThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.writeups = state.writeups.filter((w) => w._id !== payload);
    },
  },
  reducers: {},
});

export default tuitsSlice.reducer;

import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./writeups-service";

export const findWriteupsThunk = createAsyncThunk(
  "writeups/findWriteups",
  async () => await service.findWriteups()
);

export const findWriteupsByCtfIdThunk = createAsyncThunk(
  "writeups/findWriteupsByCtfId",
  async (ctfId) => await service.findWriteupsByCtfId(ctfId)
);

export const deleteWriteupThunk = createAsyncThunk(
  "writeups/deleteWriteup",
  async (writeupId) => {
    await service.deleteWriteup(writeupId);
    return writeupId;
  }
);

export const createWriteupThunk = createAsyncThunk(
  "writeups/createWriteup",
  async (writeup) => {
    const newWriteup = await service.createWriteup(writeup);
    return newWriteup;
  }
);

export const updateWriteupThunk = createAsyncThunk(
  "writeups/updateWriteup",
  async (writeup) => await service.updateWriteup(writeup)
);

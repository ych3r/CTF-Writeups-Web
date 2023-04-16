import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./writeups-service";

export const findWriteupsThunk = createAsyncThunk(
  "writeups/findwriteups",
  async () => await service.findWriteups()
);

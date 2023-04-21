import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./ctf-service";

export const findCTFEventThunk = createAsyncThunk(
  "ctf/findCTFEvent",
  async (eventId) => await service.findCTFEvent(eventId)
);

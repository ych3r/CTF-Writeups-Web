import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./users-service";

export const findUsersThunk = createAsyncThunk(
  "users/findUsers",
  async () => await service.findUsers()
);

export const deleteUserThunk = createAsyncThunk(
  "users/deleteUser",
  async (userId) => {
    await service.deleteUser(userId);
    return userId;
  }
);

export const changeRoleThunk = createAsyncThunk(
  "users/changeRole",
  async (user) => await service.changeRole(user)
);

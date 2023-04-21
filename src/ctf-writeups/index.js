import React from "react";

import { Routes, Route } from "react-router";
import NavigationBar from "./navbar";

import HomeComponent from "./home";
import WriteupsComponent from "./writeups";
import UsersComponent from "./users";
import ProfileComponent from "./profile";
import LoginComponent from "./login";
import CtfComponent from "./ctf";

import writeupsReducer from "./reducers/writeups-reducer";
import authReducer from "./reducers/auth-reducer";
import usersReducer from "./reducers/users-reducer";
import ctfReducer from "./reducers/ctf-reducer";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    writeups: writeupsReducer,
    auth: authReducer,
    users: usersReducer,
    ctf: ctfReducer,
  },
});

const CtfWriteUps = () => {
  return (
    <Provider store={store}>
      <NavigationBar />
      <div>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/home" element={<HomeComponent />} />
          <Route path="/writeups" element={<WriteupsComponent />} />
          <Route path="/users" element={<UsersComponent />} />
          <Route path="/profile" element={<ProfileComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/ctf/:eventid" element={<CtfComponent />} />
        </Routes>
      </div>
    </Provider>
  );
};

export default CtfWriteUps;

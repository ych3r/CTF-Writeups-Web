import React from "react";
import {Routes, Route} from "react-router";
import NavigationBar from "./navbar";
import HomeComponent from "./home";
import WriteupsComponent from "./writeups";
import UsersComponent from "./users";
import ProfileComponent from "./profile";
import LoginComponent from "./login";

const CtfWriteUps = () => {
  return (
    <>
      <NavigationBar />
      <div>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="home" element={<HomeComponent />} />
          <Route path="writeups" element={<WriteupsComponent />} />
          <Route path="users" element={<UsersComponent />} />
          <Route path="profile" element={<ProfileComponent />} />
          <Route path="login" element={<LoginComponent />} />
        </Routes>
      </div>
    </>
  );
};

export default CtfWriteUps;

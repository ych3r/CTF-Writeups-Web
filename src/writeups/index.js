import React from "react";
import {Routes, Route} from "react-router";
import NavigationBar from "./navbar";
import HomeComponent from "./home";
import ProfileComponent from "./profile";
import LoginComponent from "./login";

const WriteUps = () => {
  return (
    <>
      <NavigationBar />
      <div>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="home" element={<HomeComponent />} />
          <Route path="profile" element={<ProfileComponent />} />
          <Route path="login" element={<LoginComponent />} />
        </Routes>
      </div>
    </>
  );
};

export default WriteUps;

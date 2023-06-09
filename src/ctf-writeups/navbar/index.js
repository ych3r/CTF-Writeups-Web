import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { findCTFEvent } from "../../services/ctf-service";

const NavigationBar = () => {
  // const { pathname } = useLocation();
  // const paths = pathname.split("/");
  // const active = paths[1]; // "/home"
  //   console.log(paths, active);
  const { currentUser } = useSelector((state) => state.auth);
  // console.log(currentUser.isAdmin);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const searchCTF = async () => {
    navigate(`/ctf/${search}`);
  };
  return (
    <>
      {/* <h4>NavigationBar</h4> */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            CTF Write-ups
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/home">
                  Home
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/writeups">
                  Write-ups
                </Link>
              </li>
              {currentUser && currentUser.isAdmin && (
                <li className="nav-item">
                  <Link className="nav-link" to="/users">
                    Users
                  </Link>
                </li>
              )}
              {currentUser && (
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    Profile
                  </Link>
                </li>
              )}
              {!currentUser && (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login/Register
                  </Link>
                </li>
              )}
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search CTF"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={searchCTF}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;

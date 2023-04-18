import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {
  profileThunk,
  logoutThunk,
  updateUserThunk,
} from "../../services/auth-thunks";

const ProfileComponent = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const [profile, setProfile] = useState(currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const save = () => {
    dispatch(updateUserThunk(profile));
  };
  useEffect(() => {
    (async () => {
      const { payload } = await dispatch(profileThunk());
      setProfile(payload);
    })();
  }, []);
  return (
    <>
      <h4>Profile</h4>
      {profile && (
        <div>
          <label>username</label>
          <input
            type="text"
            value={profile.username}
            onChange={(event) => {
              const newProfile = {
                ...profile,
                username: event.target.value,
              };
              setProfile(newProfile);
            }}
          />
        </div>
      )}
      <button
        className="btn btn-danger"
        onClick={() => {
          dispatch(logoutThunk());
          navigate("/login");
        }}
      >
        Logout
      </button>
      <button className="btn btn-primary" onClick={save}>
        Save
      </button>
    </>
  );
};

export default ProfileComponent;

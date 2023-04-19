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
      {profile && <h4>{profile.username}'s profile</h4>}
      {profile && (
        <div>
          <label className="fw-bolder">username:</label>
          <input
            type="text"
            className="rounded"
            value={profile.username}
            onChange={(event) => {
              const newProfile = {
                ...profile,
                username: event.target.value,
              };
              setProfile(newProfile);
            }}
          />
          <div>
            <button
              className="btn btn-danger mt-2"
              onClick={() => {
                dispatch(logoutThunk());
                navigate("/login");
              }}
            >
              Logout
            </button>
            <button className="btn btn-primary mt-2 ms-2" onClick={save}>
              Save
            </button>
          </div>
        </div>
      )}
      {!profile && (<h4 className="text-danger">Wrong username or password!</h4>)}
    </>
  );
};

export default ProfileComponent;

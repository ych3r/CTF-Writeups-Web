import React, { useState } from "react";
import {
  deleteUserThunk,
  changeRoleThunk,
} from "../../../services/users-thunks";
import { useSelector, useDispatch } from "react-redux";

const UserItem = ({ user }) => {
  const dispatch = useDispatch();
  const deleteUserHandler = (uid) => {
    dispatch(deleteUserThunk(uid));
  };
  const changeRoleHandler = () => {
    if (user.role === "user") {
      dispatch(
        changeRoleThunk({
          ...user,
          role: "moderator",
        })
      );
    } else {
      dispatch(
        changeRoleThunk({
          ...user,
          role: "user",
        })
      );
    }
  };
  return (
    <li className="list-group-item">
      username: <i>{user.username}</i>
      <br />
      role: <i>{user.role}</i>
      <br />
      {!user.isAdmin && (
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            defaultChecked={user.role === "moderator"}
            onChange={changeRoleHandler}
          />
          <label className="form-check-label">delete permission</label>
        </div>
      )}
      {!user.isAdmin && (
        <i
          className="fa-solid fa-trash float-end"
          onClick={() => deleteUserHandler(user._id)}
        ></i>
      )}
    </li>
  );
};

export default UserItem;

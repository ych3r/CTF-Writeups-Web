import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findUsersThunk } from "../../../services/users-thunks";
import UserItem from "./user-item";

const UsersList = () => {
  const { users, loading } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findUsersThunk());
  }, []);
  return (
    <ul className="list-group">
      {loading && <li className="list-group-item">Loading...</li>}
      {users.map((user) => (
        <UserItem key={user._id} user={user} />
      ))}
    </ul>
  );
};

export default UsersList;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findWriteupsThunk } from "../../../services/writeups-thunks";
import WriteupItem from "./writeup-item";

const WriteupsList = () => {
  const { writeups, loading } = useSelector((state) => state.writeups);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findWriteupsThunk());
  }, []);
  return (
    <ul className="list-group">
      {loading && <li className="list-group-item">Loading...</li>}
      {writeups.map((writeup) => (
        <WriteupItem key={writeup._id} writeup={writeup} />
      ))}
    </ul>
  );
};

export default WriteupsList;

import React, { useState } from "react";
import { deleteWriteupThunk } from "../../../services/writeups-thunks";
import { useSelector, useDispatch } from "react-redux";

const WriteupItem = ({ writeup }) => {
  const { currentUser } = useSelector((state) => state.auth);
  const [profile, setProfile] = useState(currentUser);
  const dispatch = useDispatch();
  const deleteWriteupHandler = (wid) => {
    dispatch(deleteWriteupThunk(wid));
  };
  return (
    <li className="list-group-item">
      <div>
        {currentUser &&
          (profile.username === writeup.username ||
            profile.isAdmin ||
            profile.role === "moderator") && (
            <i
              className="bi bi-x-lg float-end"
              onClick={() => deleteWriteupHandler(writeup._id)}
            ></i>
          )}
        <div>
          [{writeup.ctf}] #{writeup.problem}{" "}
          <span className="fw-bolder">{writeup.username}</span> - {writeup.date}
        </div>
        <p className="text-break">{writeup.writeup}</p>
      </div>
    </li>
  );
};

export default WriteupItem;

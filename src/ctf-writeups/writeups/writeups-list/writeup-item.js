import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  deleteWriteupThunk,
  updateWriteupThunk,
} from "../../../services/writeups-thunks";
import { useSelector, useDispatch } from "react-redux";

const WriteupItem = ({ writeup }) => {
  const { currentUser } = useSelector((state) => state.auth);
  const [profile, setProfile] = useState(currentUser);
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();
  const deleteWriteupHandler = (wid) => {
    dispatch(deleteWriteupThunk(wid));
  };
  const likedHandler = () => {
    if (liked) {
      dispatch(
        updateWriteupThunk({
          ...writeup,
          likes: writeup.likes - 1,
        })
      );
    } else {
      dispatch(
        updateWriteupThunk({
          ...writeup,
          likes: writeup.likes + 1,
        })
      );
    }
    setLiked(!liked);
  };
  return (
    <li className="list-group-item">
      <div className="row">
        {currentUser && (
          <div className="col-1">
            <i
              className={`fa-solid fa-chevron-up ${liked ? "text-danger" : ""}`}
              onClick={likedHandler}
            ></i>
            <div className="ms-1">{writeup.likes}</div>
          </div>
        )}
        <div className="col">
          {currentUser &&
            (profile.username === writeup.username ||
              profile.isAdmin ||
              profile.role === "moderator") && (
              <i
                className="fa-solid fa-trash float-end"
                onClick={() => deleteWriteupHandler(writeup._id)}
              ></i>
            )}
          <div>
            <Link to={`/ctf/${writeup.ctf}`}>[{writeup.ctf}]</Link>#
            {writeup.problem}{" "}
            <span className="fw-bolder">{writeup.username}</span> -{" "}
            {writeup.date}
          </div>
          <p className="text-break">{writeup.writeup}</p>
        </div>
      </div>
    </li>
  );
};

export default WriteupItem;

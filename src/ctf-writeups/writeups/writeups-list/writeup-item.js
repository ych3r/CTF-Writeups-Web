import React from "react";
import { deleteWriteupThunk } from "../../../services/writeups-thunks";
import { useDispatch } from "react-redux";

const WriteupItem = ({ writeup }) => {
  const dispatch = useDispatch();
  const deleteWriteupHandler = (wid) => {
    dispatch(deleteWriteupThunk(wid));
  };
  return (
    <li className="list-group-item">
      <div>
        <i
          className="bi bi-x-lg float-end"
          onClick={() => deleteWriteupHandler(writeup._id)}
        ></i>
        <div>
          [{writeup.ctf}] #{writeup.problem}{" "}
          <span className="fw-bolder">{writeup.username}</span> - {writeup.date}
        </div>

        <div>{writeup.writeup}</div>
      </div>
    </li>
  );
};

export default WriteupItem;

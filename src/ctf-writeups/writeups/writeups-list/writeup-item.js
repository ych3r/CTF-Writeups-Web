import React from "react";

const WriteupItem = ({ writeup }) => {
  return (
    <li className="list-group-item">
      <div>
        <i className="bi bi-x-lg float-end"></i>
        <div>
          [{writeup.ctf}] #{writeup.problem} - {writeup.date}
        </div>
        <span className="fw-bolder">{writeup.username}</span>
        <div>{writeup.writeup}</div>
      </div>
    </li>
  );
};

export default WriteupItem;

import React from "react";

const RelatedWriteupItem = ({ writeup }) => {
//   console.log(writeup);
  return (
    <li className="list-group-item">
      <span>{writeup.username} #{writeup.problem}</span>
      <p>{writeup.writeup}</p>
      <i>likes: {writeup.likes}</i>
    </li>
  );
};

export default RelatedWriteupItem;

import React, { useEffect, useState } from "react";
import { findWriteupsByCtfIdThunk } from "../../../services/writeups-thunks";
import { useDispatch, useSelector } from "react-redux";
import RelatedWriteupItem from "./related-writeup-item";
import * as service from "../../../services/writeups-service";

const RelatedWriteupsList = (ctf) => {
  const ctfId = ctf.ctfId;

  const [writeups, setWriteups] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchWriteup = async (ctfId) => {
    setLoading(true);
    const data = await service.findWriteupsByCtfId(ctfId);
    setLoading(false);
    setWriteups(data);
  };

  useEffect(() => {
    if (!ctfId) return;

    fetchWriteup(ctfId);
  }, [ctfId]);

  console.log(writeups);
  return (
    <ul className="list-group">
      {console.log(ctfId)}
      {loading && <li className="list-group-item">Loading...</li>}
      {writeups.map((writeup) => (
        <RelatedWriteupItem key={writeup._id} writeup={writeup} />
      ))}
    </ul>
  );
};

export default RelatedWriteupsList;

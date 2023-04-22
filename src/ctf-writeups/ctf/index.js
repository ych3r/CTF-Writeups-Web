import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { findCTFEventThunk } from "../../services/ctf-thunks";
import { useDispatch, useSelector } from "react-redux";
import RelatedWriteupsList from "./related-writeups-list";

const CtfComponent = () => {
  const { eventid } = useParams();
  const { ctf, loading } = useSelector((state) => state.ctf);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("send request");
    dispatch(findCTFEventThunk(eventid));
  }, []);
  return (
    <>
      {loading && <span>Loading...</span>}
      <div>
        <h4>{ctf.title}</h4>
        <img src={ctf.logo} width={200} />
        <ul className="list-group">
          <li className="list-group-item">id: {ctf.id}</li>
          <li className="list-group-item">start: {ctf.start}</li>
          <li className="list-group-item">finish: {ctf.finish}</li>
          <li className="list-group-item">format: {ctf.format}</li>
          <li className="list-group-item">
            Description: <p>{ctf.description}</p>
          </li>
        </ul>
      </div>
      <div>
        <h4>Write-ups</h4>
        <RelatedWriteupsList ctfId={ctf.id} />
      </div>
    </>
  );
};

export default CtfComponent;

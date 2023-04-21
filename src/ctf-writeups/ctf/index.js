import React, { useEffect } from "react";
import { useParams } from "react-router";
import { findCTFEventThunk } from "../../services/ctf-thunks";
import { useDispatch, useSelector } from "react-redux";

const CtfComponent = () => {
  const { eventid } = useParams();
  const { ctf, loading } = useSelector((state) => state.ctf);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findCTFEventThunk(eventid));
  }, []);
  return (
    <>
      {loading && <span>Loading...</span>}
      <h4>{ctf.title}</h4>
      
    </>
  );
};

export default CtfComponent;

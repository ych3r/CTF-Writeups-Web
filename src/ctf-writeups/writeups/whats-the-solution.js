import React, { useEffect, useState } from "react";
import { createWriteupThunk } from "../../services/writeups-thunks";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const WhatsTheSolution = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const [profile, setProfile] = useState(currentUser);
  const [ctf, setCtf] = useState("");
  const [problem, setProblem] = useState("");
  const [whatsTheSolution, setWhatsTheSolution] = useState("");
  const dispatch = useDispatch();
  const writeupClickHandler = () => {
    const newWriteup = {
      ctf: ctf,
      problem: problem,
      username: profile.username,
      writeup: whatsTheSolution,
    };
    dispatch(createWriteupThunk(newWriteup));
  };
  return (
    <>
      <div className="row">
        <div className="col-auto">
          <label>CTF:</label>
          <input
            type="text"
            className="form-control col"
            placeholder="ctf"
            onChange={(event) => setCtf(event.target.value)}
          />
        </div>
        <div className="col-auto">
          <label>Problem:</label>
          <input
            type="text"
            className="form-control"
            placeholder="problem"
            onChange={(event) => setProblem(event.target.value)}
          />
        </div>
      </div>
      <div className="mt-2 mb-5">
        <textarea
          defaultValue={WhatsTheSolution}
          placeholder="What's the solution?"
          className="form-control border-1"
          onChange={(event) => setWhatsTheSolution(event.target.value)}
        ></textarea>
        <button
          className="btn btn-primary float-end mt-1"
          onClick={writeupClickHandler}
        >
          Publish
        </button>
      </div>
    </>
  );
};

export default WhatsTheSolution;

import React from "react";
import WhatsTheSolution from "./whats-the-solution";
import WriteupsList from "./writeups-list";
import { useSelector } from "react-redux";

const WriteupsComponent = () => {
  const { currentUser } = useSelector((state) => state.auth);
  return (
    <>
      {currentUser && <WhatsTheSolution />}
      {!currentUser && <h4>Write-ups list</h4>}
      <WriteupsList />
    </>
  );
};

export default WriteupsComponent;

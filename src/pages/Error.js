import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="text-4xl text-white text-center mt-10 mb-3">Error</div>
      <Link to="/Portfolio/">Back to home</Link>
    </>
  );
};

export default Error;

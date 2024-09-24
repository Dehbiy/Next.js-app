"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}
const error = ({ error, reset }: Props) => {
  return (
    <>
      <div>An unexpected error has occured</div>
      <button onClick={reset} className="btn btn-warning">
        Retry
      </button>
    </>
  );
};

export default error;

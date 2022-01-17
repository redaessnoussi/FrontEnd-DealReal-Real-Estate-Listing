import { useState } from "react";
import { css } from "@emotion/react";
import { SquareLoader } from "react-spinners";

// Can be a string as well. Need to ensure each key-value pair ends with ;

function LoadingPage() {
  return (
    <div className="w-full flex flex-col justify-center items-center h-full absolute top-0 bg-white">
      <SquareLoader size={150} color={`#27AD77`} />
    </div>
  );
}

export default LoadingPage;

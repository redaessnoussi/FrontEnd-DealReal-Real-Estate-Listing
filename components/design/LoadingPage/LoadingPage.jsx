import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

function LoadingPage() {
  return (
    <div className="w-full flex flex-col justify-center items-center h-full absolute top-0 bg-white">
      <ClipLoader size={150} color={`#27AD77`} />
    </div>
  );
}

export default LoadingPage;

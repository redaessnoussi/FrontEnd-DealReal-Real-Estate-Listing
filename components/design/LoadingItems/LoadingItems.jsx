import { ClipLoader } from "react-spinners";

function LoadingItems() {
  return (
    <div className="w-full flex justify-center py-20">
      <ClipLoader size={150} color={`#27AD77`} />
    </div>
  );
}

export default LoadingItems;

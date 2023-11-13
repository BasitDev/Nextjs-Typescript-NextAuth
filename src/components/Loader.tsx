import React from "react";
import { ClipLoader } from "react-spinners";

const Loader = ({ loading, color = "#0F3744", size = 50 }: any) => {
  const override = {
    display: "block",
    margin: "0 auto", // borderColor: "red",
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;

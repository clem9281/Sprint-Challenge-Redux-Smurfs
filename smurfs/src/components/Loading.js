import React from "react";
import Loader from "react-loader-spinner";
const Loading = () => {
  return (
    <div className="card">
      <Loader type="Bars" color="#00BFFF" height="100" width="100" />
    </div>
  );
};

export default Loading;

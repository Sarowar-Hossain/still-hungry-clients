import React, { useContext } from "react";
import { ContextProvider } from "../context/AuthContext";
import { TailSpin } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(ContextProvider);
  const location = useLocation();

  if (loader) {
    return (
      <div className="flex justify-center items-center">
        <TailSpin
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/signin" state={{from: location}}  replace></Navigate>;
};

export default PrivateRoute;

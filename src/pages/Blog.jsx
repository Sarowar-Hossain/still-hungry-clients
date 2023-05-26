import { useContext } from "react";
import { ContextProvider } from "../context/AuthContext";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import React from "react";
const Blog = () => {
  const { user } = useContext(ContextProvider);
  const ref = React.createRef();
  console.log(user);
  return (
    <div className="flex flex-col justify-center items-center">
      <h1>COming soon</h1>
    </div>
  );
};

export default Blog;

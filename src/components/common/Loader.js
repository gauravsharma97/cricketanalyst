import React from "react";
import LoaderGIF from "../../resources/loader.gif";

export default function Loader() {
  return (
    <div className="flex justify-center items-center ">
      <img className="w-20" src={LoaderGIF} alt="loader"></img>
    </div>
  );
}

import React, { useEffect } from "react";
import SeriesCard from "./SeriesCard";

export default function Series() {
  const onClickedFunction = (divId) => {
    console.log("clicked");
    let setStyle ="bg-green-900 text-white pr-32 pl-4 rounded-t  rounded-b-none w-96 cursor-pointer";
    let removeStyle = "pr-32 pl-4 rounded-t rounded-b-none w-96 cursor-pointer";
    if (divId === "test") {
      document.getElementById("test").className = setStyle;
      document.getElementById("odi").className = removeStyle;
      document.getElementById("t20").className = removeStyle;
    }
    if (divId === "odi") {
      document.getElementById("odi").className = setStyle;
      document.getElementById("test").className = removeStyle;
      document.getElementById("t20").className = removeStyle;
    }
    if (divId === "t20") {
      document.getElementById("t20").className = setStyle;
      document.getElementById("test").className = removeStyle;
      document.getElementById("odi").className = removeStyle;
    }
  };

  useEffect(() => {
    onClickedFunction('test')
  },[]);
  return (
    <div>
      <div className="text-center text-3xl font-sans font-extrabold mt-3 text-green-700">
        Australia tour of India, 2023
      </div>
      <div className="flex  text-2xl font-mono font-semibold text-green-900 mt-9 ml-32 ">
        <div
          className="pr-32 pl-4 rounded-t rounded-b-none w-96 cursor-pointer "
          onClick={() => onClickedFunction("test")}
          id="test"
        >
          Test
        </div>
        <div
          className="pr-32 pl-4 rounded-b-none w-96 cursor-pointer"
          onClick={() => onClickedFunction("odi")}
          id="odi"
        >
          ODI
        </div>
        <div
          className="pr-32 pl-4 rounded-b-none w-96 cursor-pointer"
          onClick={() => onClickedFunction("t20")}
          id="t20"
        >
          T<sub>20</sub>
        </div>
      </div>
      <div className="ml-32 bg-green-900 w-[85.25%] text-white">
        <div className="pt-8 pb-2">
          <SeriesCard
            id="aa7bdd89-d368-4a5d-ba93-27b1cf6943b8"
            title="India vs Australia, 1st Test"
            img1="https://g.cricapi.com/img/teams/6-637877070670541994.webp"
            img2="https://g.cricapi.com/img/teams/31-637877061080567215.webp"
            venue="Vidarbha Cricket Association Stadium, Nagpur"
            timing="2023-02-09T04:00:00"
            matchStarted="false"
          />
        </div>
        <div className="pt-8 pb-2">
          <SeriesCard
            id="aa7bdd89-d368-4a5d-ba93-27b1cf6943b8"
            title="India vs Australia, 1st Test"
            img1="https://g.cricapi.com/img/teams/6-637877070670541994.webp"
            img2="https://g.cricapi.com/img/teams/31-637877061080567215.webp"
            venue="Vidarbha Cricket Association Stadium, Nagpur"
            timing="2023-02-09T04:00:00"
            matchStarted="false"
          />
        </div>
        <div className="pt-8 pb-2">
          <SeriesCard
            id="aa7bdd89-d368-4a5d-ba93-27b1cf6943b8"
            title="India vs Australia, 1st Test"
            img1="https://g.cricapi.com/img/teams/6-637877070670541994.webp"
            img2="https://g.cricapi.com/img/teams/31-637877061080567215.webp"
            venue="Vidarbha Cricket Association Stadium, Nagpur"
            timing="2023-02-09T04:00:00"
            matchStarted="false"
          />
        </div>
        <div className="pt-8 pb-2">
          <SeriesCard
            id="aa7bdd89-d368-4a5d-ba93-27b1cf6943b8"
            title="India vs Australia, 1st Test"
            img1="https://g.cricapi.com/img/teams/6-637877070670541994.webp"
            img2="https://g.cricapi.com/img/teams/31-637877061080567215.webp"
            venue="Vidarbha Cricket Association Stadium, Nagpur"
            timing="2023-02-09T04:00:00"
            matchStarted="false"
          />
        </div>
        <div className="pt-8 pb-2">
          <SeriesCard
            id="aa7bdd89-d368-4a5d-ba93-27b1cf6943b8"
            title="India vs Australia, 1st Test"
            img1="https://g.cricapi.com/img/teams/6-637877070670541994.webp"
            img2="https://g.cricapi.com/img/teams/31-637877061080567215.webp"
            venue="Vidarbha Cricket Association Stadium, Nagpur"
            timing="2023-02-09T04:00:00"
            matchStarted="false"
          />
        </div>
      </div>
    </div>
  );
}

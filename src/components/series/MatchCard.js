import React from "react";

export default function MatchCard(props) {
  return (
    <div className="ml-32 bg-yellow-200 w-[80%] text-white mb-5 rounded-lg cursor-pointer">
      <div className="flex justify-around items-center">
        <img src={props.img1} alt="aus" className="w-20"></img>
        <div className="text-3xl text-black font-sans font-extrabold">
          {props.title}
        </div>
        <img src={props.img2} alt="ind" className="w-20"></img>
      </div>
      <div>
        <div className="flex items-center ml-24 justify-self-center">
          <div className="text-2xl text-black font-serif font-bold">
            Venue :
          </div>
          <div className=" text-xl text-black font-mono font-light mt-2 ml-5">
            {props.venue}
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center ml-24 justify-self-center">
          <div className="text-2xl text-black font-serif font-bold">
            March Start Timing :
          </div>
          <div className=" text-xl text-black font-mono font-light mt-2 ml-5">
            {new Date(props.timing + "z").toLocaleString(undefined, {
              timeZone: "Asia/Kolkata",
            })}
          </div>
        </div>
      </div>
      <div className="text-center text-xl text-green-700 font-sans font-extrabold pt-5 pb-5 -ml-10">
        {props.matchStatus}
      </div>
    </div>
  );
}

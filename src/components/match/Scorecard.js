import React from "react";
import toss from "../../resources/toss.png";
export default function Scorecard(props) {
  return (
    <div className=" shadow-xl shadow-slate-900 rounded p-2 w-2/5 bg-slate-300">
      <div className="flex">
        <div className="text-3xl ml-5 font-serif font-medium mr-2">
          {props.teamName}
        </div>
        {props.wonToss ? <img src={toss} alt="toss"></img> : ""}
      </div>
      <div className="flex text-3xl ml-5 font-serif font-medium justify-between">
        <div>Score :</div>
        <div>{props.score}</div>
      </div>
      <div className="flex text-3xl ml-5 font-serif font-medium justify-between">
        <div>Wickets :</div>
        <div> {props.wickets}</div>
      </div>
      <div className="flex text-3xl ml-5 font-serif font-medium justify-between">
        <div>Overs :</div>
        <div> {props.overs}</div>
      </div>
    </div>
  );
}

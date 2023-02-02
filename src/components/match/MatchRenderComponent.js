import React from "react";
import Scorecard from "./Scorecard";
export default function MatchRenderComponent(props) {
  return (
    <>
      <div className="flex items-center justify-between ml-10 mr-10 mt-3">
        <div>
          <img
            src={props.match.teamInfo[0].img}
            alt={props.match.teamInfo[0].shortname}
            className="w-20"
          ></img>
        </div>
        <div className="text-3xl text-black font-sans font-extrabold">
          {props.match.name}
        </div>
        <div>
          <img
            src={props.match.teamInfo[1].img}
            alt={props.match.teamInfo[1].shortname}
            className="w-20"
          ></img>
        </div>
      </div>
      <div className="flex justify-between font-mono font-light ml-10 mr-10 mt-3">
        <div>
          {new Date(props.match.dateTimeGMT + "z").toLocaleString(undefined, {
            timeZone: "Asia/Kolkata",
          })}
        </div>
        <div>{props.match.venue}</div>
      </div>
      <div className="flex justify-center items-center ml-10 mr-10">
        <div className="text-3xl ml-2 mr-2 mt-5 mb-3 text-green-800 font-extrabold font-serif">
          {props.match.status}
        </div>
      </div>
      <div className="m-6  p-2 rounded  flex justify-around">
        {props.match.score.map((item) =>
          item.inning.includes(props.match.tossWinner) ? (
            <Scorecard
              teamName={item.inning}
              wonToss={true}
              score={item.r}
              wickets={item.w}
              overs={item.o}
            />
          ) : (
            <Scorecard
              teamName={item.inning}
              wonToss={false}
              score={item.r}
              wickets={item.w}
              overs={item.o}
            />
          )
        )}

        {/* <Scorecard />
        <Scorecard /> */}
      </div>
    </>
  );
}

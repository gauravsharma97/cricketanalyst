import React, { useEffect, useState } from "react";
import EmptyCard from "./EmptyCard";
import MatchCard from "./MatchCard";
import { useLocation } from "react-router-dom";
import Loader from "../common/Loader";

let testMatch = [];
let odiMatch = [];
let t20Match = [];
let loadingAnimation = true;
let firstTime = true;

export default function Series(props) {
  const [matches, setMatches] = useState([]);
  const [title, setTitle] = useState("");
  const seriesID = useLocation().pathname.substring(8);
  const onClickedFunction = async (divId) => {
    let setStyle =
      "bg-green-900 text-white pr-32 pl-4 rounded-t  rounded-b-none w-96 cursor-pointer";
    let removeStyle = "pr-32 pl-4 rounded-t rounded-b-none w-96 cursor-pointer";
    if (divId === "test") {
      document.getElementById("test").className = setStyle;
      document.getElementById("odi").className = removeStyle;
      document.getElementById("t20").className = removeStyle;
      setMatches(testMatch);
    } else if (divId === "odi") {
      document.getElementById("odi").className = setStyle;
      document.getElementById("test").className = removeStyle;
      document.getElementById("t20").className = removeStyle;
      setMatches(odiMatch);
    } else if (divId === "t20") {
      document.getElementById("t20").className = setStyle;
      document.getElementById("test").className = removeStyle;
      document.getElementById("odi").className = removeStyle;
      setMatches(t20Match);
    }
  };

  const getMatchesOfSeries = async () => {
    testMatch = [];
    odiMatch = [];
    t20Match = [];

    // const data = await fetch(
    //   "https://api.cricapi.com/v1/series_info?apikey=106ff446-17af-4e59-8070-2c4790d1ccd0&offset=0&id=" +
    //     seriesID
    // );
    // const parsedData = await data.json();
    // let matchList = await parsedData.data.matchList;
    // setTitle(parsedData.data.info.name);

    fetch(
      "https://api.cricapi.com/v1/series_info?apikey=106ff446-17af-4e59-8070-2c4790d1ccd0&offset=0&id=" +
        seriesID
    )
      .then((response) => response.json())
      .then((response) => {
        let matchList = response.data.matchList;
        setTitle(response.data.info.name);
        for (let i = 0; i < matchList.length; i++) {
          let match = matchList[i];
          if (match.matchType === "test") {
            testMatch.push(match);
          } else if (match.matchType === "odi") {
            odiMatch.push(match);
          } else if (match.matchType === "t20") {
            t20Match.push(match);
          }
        }
        loadingAnimation = false;
      })
      .catch((err) => console.error(err));
  };
  const onClickCS = () => {
    console.log(odiMatch.length);
    if (testMatch.length > 0) {
      onClickedFunction("test");
    } else if (odiMatch.length > 0) {
      onClickedFunction("odi");
    } else if (t20Match.length > 0) {
      onClickedFunction("t20");
    }
    firstTime = false;
  };
  useEffect(() => {
    getMatchesOfSeries();

    // eslint-disable-next-line
  }, []);
  return (
    <>
      {!loadingAnimation ? (
        <div>
          <div className="text-center text-3xl font-sans font-extrabold mt-3 text-green-700">
            {title}
          </div>
          <div className="flex  text-2xl font-mono font-semibold text-green-900 mt-9 ml-32 w-[85.25%]">
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
          <div className="ml-32 bg-green-900 w-[1152px] text-white">
            {matches.length > 0 ? (
              matches.map((item) =>
                item.matchEnded ? (
                  <a key={item.id} href={"/match/" + item.id}>
                    <div className="pt-8 pb-2 cursor-pointer">
                      <MatchCard
                        id={item.id}
                        title={item.name}
                        img1={item.teamInfo[0].img}
                        img2={item.teamInfo[1].img}
                        venue={item.venue}
                        timing={item.dateTimeGMT}
                        matchStatus={item.status}
                      />
                    </div>
                  </a>
                ) : (
                  <div key={item.id} className="pt-8 pb-2">
                    <MatchCard
                      id={item.id}
                      title={item.name}
                      img1={item.teamInfo[0].img}
                      img2={item.teamInfo[1].img}
                      venue={item.venue}
                      timing={item.dateTimeGMT}
                      matchStatus={item.status}
                    />
                  </div>
                )
              )
            ) : (
              <div className="pt-8 pb-2">
                <EmptyCard />
              </div>
            )}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

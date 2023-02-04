import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../common/Loader";
import MatchRenderComponent from "./MatchRenderComponent";

let loadingAnimation = true;
export default function Match() {
  console.log("sd");
  const matchID = useLocation().pathname.substring(7);
  console.log(matchID);
  const [match, setMatch] = useState([]);
  const getMatchDetails = async () => {
    console.log("here2");
    const data = await fetch(
      "https://api.cricapi.com/v1/match_info?apikey=106ff446-17af-4e59-8070-2c4790d1ccd0&offset=0&id=" +
        matchID
    );
    const parsedData = await data.json();
    console.log(parsedData.data);
    setMatch(parsedData.data);
    loadingAnimation = false;
  };
  useEffect(() => {
    console.log("here");
    getMatchDetails();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {!loadingAnimation ? <MatchRenderComponent match={match} /> : <Loader />}
    </>
  );
}

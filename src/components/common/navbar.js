import React from "react";
import logo from "../../resources/logo.png";
export default function navbar() {
  return (
    <nav className="p-2 bg-gray-600  text-white flex justify-between items-center sticky top-0 z-50">
      <img src={logo} className="h-10" alt="logo"></img>
      <ul className="flex ">
        <li className="p-3 cursor-pointer hover:text-black">Latest Score</li>
        <li className="p-3 cursor-pointer hover:text-black">Teams</li>
        <li className="p-3 cursor-pointer hover:text-black">Ranking</li>
        <li className="p-3 cursor-pointer hover:text-black">Series</li>
      </ul>
      <div></div>
    </nav>
  );
}

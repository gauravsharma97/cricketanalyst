import React from "react";

export default function Card(props) {
  const onHoverFunction =(colorClass)=>{
    let abc = document.getElementById(props.id);
    abc.className = colorClass
  }

  return (
    <div className="w-72 h-40  rounded-md bg-gray-600 shadow-lg shadow-slate-700 m-4 cursor-pointer pl-2 pr-2 text-white flex flex-col justify-between hover:text-black hover:bg-slate-300 " 
    onMouseEnter={()=>onHoverFunction("flex justify-between text-emerald-900")}
    onMouseLeave={()=>onHoverFunction("flex justify-between text-green-400")}
    >
      <div className="w-full text-xl font-serif font-bold  ">
        {props.title}
      </div>
      <div className="flex justify-between font-sans font-light ">
        <div>{props.from}</div>
        <div>To</div>
        <div> {props.to}</div>
      </div>
      <div>
        <div className="flex justify-between text-green-400" id={props.id} >
          <div >
            <div className="text-center">{props.t20}</div>
            <div className="flex items-center">
              <div className="font-extrabold text-2xl">T</div>
              <div className="font-light">20</div>
            </div>
          </div>
          <div className=" ml-4">
            <div className="text-center">{props.odi}</div>
            <div className="font-bold text-2xl">ODI</div>
          </div>
          <div>
            <div className="text-center font-normal">{props.test}</div>

            <div className="font-extrabold text-2xl">Test</div>
          </div>
        </div>
      </div>
    </div>
  );
}

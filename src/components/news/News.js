import React from "react";
import newsImg from '../../resources/newsImg.jpg'
import rightArrow from '../../resources/rightArrow.png'
import leftArrow from '../../resources/leftArrow.png'

export default function News() {
    let initLefttranslate="0";

    const nextSlide =()=>{  
        initLefttranslate-=320;
        let bb= document.getElementsByClassName("newsSlider")
        bb[0].style.transform="translate("+initLefttranslate+"px, 0px";
        
      };

      const previousSlide =()=>{  
        initLefttranslate+=320;
        let bb= document.getElementsByClassName("newsSlider")
        bb[0].style.transform="translate("+initLefttranslate+"px, 0px";
      };
    


  return(
    <div className="overflow-hidden relative w-80 m-4">
        <div className="z-10 absolute top-1/2 -right-3 rounded-3xl cursor-pointer" onClick={nextSlide} >
                <img src={rightArrow} alt="right"></img>
            </div>
            <div className="z-10 absolute top-1/2 -left-3 rounded-3xl cursor-pointer" onClick={previousSlide}>
                <img src={leftArrow} alt="right"></img>
            </div>
        <div className="w-full  flex  shadow-md shadow-slate-500 rounded-md newsSlider" style={{transform:"translate(0px,0px)",transition:"transform 0.4s ease-in-out 0s"}}>
            
            <div className="min-w-[320px] bg-slate-200">
            <img src={newsImg} className="w-full rounded object-cover" alt="News"></img>
            <p className="text-center text-2xl mt-2"> News Item </p>
            </div>
            <div className="min-w-[320px] bg-slate-200" >
            <img src={newsImg} className="w-full rounded object-cover" alt="News"></img>
            <p className="text-center text-2xl mt-2"> News Item2 </p>
            </div>
            <div className="min-w-[320px] bg-slate-200">
            <img src={newsImg} className="w-full rounded object-cover" alt="News"></img>
            <p className="text-center text-2xl mt-2"> News Item3 </p>
            </div>
            <div className="min-w-[320px] bg-slate-200">
            <img src={newsImg} className="w-full ounded object-cover" alt="News"></img>
            <p className="text-center text-2xl mt-2"> News Item4 </p>
            </div>
        </div>
        </div>
    );
}

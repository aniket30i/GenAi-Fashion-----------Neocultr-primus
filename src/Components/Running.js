import React from "react";
import t1 from "../ideas/typ1.jpg";
import t2 from "../ideas/typ2.jpg";
import t3 from "../ideas/typ3.jpg";
import t4 from "../ideas/typ4.jpg";
import t5 from "../ideas/typ5.jpg";

function Running() {
  return (
    <div className="runner">
      <h3 className="title-idea">Some AI generated fashion ideas</h3>
      <div className="moving-text">
        <div class="con">
          <img className="ron-pic" src={t1} alt="xyz" />
          <div id="gola"></div>
          <img className="ron-pic" src={t2} alt="xyz" />
          <div id="gola"></div>
          <img className="ron-pic" src={t3} alt="xyz" />
          <div id="gola"></div>
          <img className="ron-pic" src={t4} alt="xyz" />
          <div id="gola"></div>
          <img className="ron-pic" src={t5} alt="xyz" />
          <div id="gola"></div>
        </div>
      </div>
    </div>
  );
}

export default Running;

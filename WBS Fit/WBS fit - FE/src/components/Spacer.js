import React from "react";
import Rhomb from "../img/rhomb.svg";

const Spacer = () => {
  return (
    <div className="spacer">
      <div>
        <hr />
      </div>
      <div className="spacerIcon" style={{ color: "#fff" }}>
        <img src={Rhomb} alt="Rhomb" />
      </div>
      <div>
        <hr />
      </div>
    </div>
  );
};

export default Spacer;

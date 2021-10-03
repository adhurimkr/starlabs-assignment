import React, { useState } from "react";
import "./TeamInfo.scss";

const TeamInfo = ({ name, text }) => {
  const [showInfo, setShowInfo] = useState(false);

  const showDetail = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="team-info">
      <div className="team-info-name">
        {/* making sure the information name starts with uppercase */}
        <h2>{name[0].toUpperCase() + name.slice(1)}:</h2>
        <button className="team-info-btn" onClick={showDetail}>
          {showInfo ? "-" : "+"}
        </button>
      </div>
      {showInfo && <p className="team-info-text">{text}</p>}
    </div>
  );
};

export default TeamInfo;

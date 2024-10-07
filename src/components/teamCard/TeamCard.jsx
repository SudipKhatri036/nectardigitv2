import React from "react";
import "./TeamCard.css";

function TeamCard({ team }) {
  const { full_name: fullname, image, position } = team;
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="team-wrap">
        <div className="team-img">
          <img src="/images/team1.jpg" alt="Amrit Sparsha" />
        </div>
        <div className="team-content">
          <a href="https://www.nectardigit.com/team/amrit-sparsha">
            <button>
              <span>{fullname}</span>
              <p>{position}</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;

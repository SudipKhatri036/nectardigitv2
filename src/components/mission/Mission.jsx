import React from "react";

import { FaBalanceScale, FaBullseye, FaEye } from "react-icons/fa";
import "./Mission.css";

function Mission({ missionData }) {
  return (
    <section className="mission">
      <div className="row">
        <div className="col-lg-4 col-md-6 mission-cont">
          <div className="mission-wrap hvr-buzz-out">
            <FaBullseye />
            <span>{missionData?.[0]?.title}</span>
            <div
              dangerouslySetInnerHTML={{
                __html: missionData?.[0]?.description,
              }}
            />
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mission-cont">
          <div className="mission-wrap hvr-buzz-out">
            <FaEye />
            <span>{missionData[1]?.title}</span>
            <div
              dangerouslySetInnerHTML={{
                __html: missionData?.[1]?.description,
              }}
            />
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mission-cont">
          <div className="mission-wrap hvr-buzz-out">
            <FaBalanceScale />
            <span>{missionData?.[2]?.title}</span>
            <div
              dangerouslySetInnerHTML={{
                __html: missionData?.[2]?.description,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;

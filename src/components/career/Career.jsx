import React from "react";
import PageHero from "../pageHero/PageHero";
import { FaChartBar } from "react-icons/fa6";

function Career() {
  return (
    <section>
      <PageHero imgSrc="/images/carrer-banner-01.png" pageName="Career" />

      <div className="career mt mb">
        <div className="container">
          <div className="main-title">
            <span className="title-pattern">
              <FaChartBar />
            </span>
          </div>

          <div className="col-lg-7 col-md-12 career-head">
            <h2>WE DON'T HAVE ANY VACANCY FOR NOW.</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Career;

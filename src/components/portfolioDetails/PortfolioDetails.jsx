import React from "react";
import { FaCode, FaUser } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import Loader from "../loader/Loader";
import "./PortfolioDetails.css";

function PortfolioDetails() {
  const { id } = useParams();

  const { data, isLoading, error } = useAxios(`clients/${id}`);

  if (isLoading) return <Loader />;

  if (error) return <p className="fetch-error">Error: {error.message}</p>;

  const { title, date, image, logo } = data?.data || {};

  return (
    <section className="portfolio-details pt pb">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="portfolio-details-img">
              <img
                src={image || logo}
                alt={"Air logistics"}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="portfolio-details-content">
              <h3>{title}</h3>
              <span>
                <p>{title} </p>
              </span>
              <ul>
                <li>
                  <FaCode /> Developed By : Nectar Digit
                </li>
                <li>
                  <FaUser /> Clients Name : {title}
                </li>
                <li>
                  <FaCalendar /> Date : {date}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioDetails;

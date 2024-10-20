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

  return (
    <section className="portfolio-details pt pb">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="portfolio-details-img">
              <img
                src={data?.data.image}
                alt="Air logistics"
                referrerpolicy="no-referrer"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="portfolio-details-content">
              <h3>{data?.data.title}</h3>
              <span>
                <p>{data?.data.title} </p>
              </span>
              <ul>
                <li>
                  <FaCode /> Developed By : Nectar Digit
                </li>
                <li>
                  <FaUser /> Clients Name : {data?.data.title}
                </li>
                <li>
                  <FaCalendar /> Date : {data?.data.date}
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

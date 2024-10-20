import React, { useEffect, useState } from "react";
import PortfolioCard from "../portfolioCard/PortfolioCard";
import useAxios from "../../hooks/useAxios";

import "./PortfolioPage.css";
import axios from "axios";

function PortfolioPage({ client }) {
  const [clients, setClients] = useState([]);

  return (
    <section className="portfolio-page mt">
      <div className="container">
        <div className="row portfolio-items">
          {client.map((portfolioItem) => {
            return (
              <PortfolioCard
                portfolioItem={portfolioItem}
                key={portfolioItem.id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PortfolioPage;

import React from "react";
import PortfolioCard from "../portfolioCard/PortfolioCard";

import "./PortfolioPage.css";

function PortfolioPage({ client }) {
  return (
    <section className="portfolio-page mt">
      <div className="container">
        <div className="row portfolio-items">
          {client?.map((portfolioItem) => {
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

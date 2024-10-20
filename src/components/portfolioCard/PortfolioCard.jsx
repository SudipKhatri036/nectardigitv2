import { Link, useNavigate } from "react-router-dom";
import "./PortfolioCard.css";

function PortfolioCard({ portfolioItem }) {
  const { title, image, logo, id } = portfolioItem;

  const navigate = useNavigate();

  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="portfolio-wrap hvr-wobble-bottom">
        <button
          title="Airlogisticsgroup"
          onClick={() => navigate(`/portfolio/${id}`)}
        >
          <div className="portfolio-img">
            <img src={logo || image} alt={title} referrerPolicy="no-referrer" />
          </div>
          <div className="portfolio-content">
            <span>{title}</span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default PortfolioCard;

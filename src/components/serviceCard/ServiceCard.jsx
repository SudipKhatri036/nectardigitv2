import { Link, useNavigate } from "react-router-dom";
import "./ServiceCard.css";

function ServiceCard({ service }) {
  const { image, title, description, id } = service;

  const navigate = useNavigate();

  const handleSeeMore = (id) => {
    navigate(`${id}`);
  };

  return (
    <div className="col-lg-4 col-md-6">
      <div className="service-card">
        <div className="service-icon">
          <img src="images/" alt="Service Icon" />
        </div>
        <div className="service-content">
          <h3 className="heading-tertiary">{title}</h3>
          <p></p>

          <button className="main-btn1" onClick={() => handleSeeMore(id)}>
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;

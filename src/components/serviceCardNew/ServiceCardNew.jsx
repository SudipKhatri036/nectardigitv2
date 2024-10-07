import { useNavigate } from "react-router-dom";
import "./ServiceCardNew.css";
import { FaArrowRight } from "react-icons/fa6";

function ServiceCardNew({ service }) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="single-services service-style-one">
        <div className="services-inner  with-shadow card-bg-color">
          <div className="thumbnail">
            <img src="/images/web-dev.png" alt="Business consulting services" />
          </div>
          <div className="services-content">
            <a>
              <h5 className="title">{service.title}</h5>
            </a>
            <p className="desctiption">
              Cross-browser and cross-device compatibility driven by mobile
              responsiveness all under one roof. Starting from basic website
              designs, including CMS...
            </p>

            <a
              className="angle-roted"
              onClick={() => navigate(`/services/${service.id}`)}
            >
              <FaArrowRight />
            </a>
          </div>
          <div className="number">
            {service.id >= 10 ? service.id - 1 : `0${service.id - 1}`}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCardNew;

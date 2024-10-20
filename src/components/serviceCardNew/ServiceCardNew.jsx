import { useNavigate } from "react-router-dom";
import "./ServiceCardNew.css";
import { FaArrowRight } from "react-icons/fa6";

function ServiceCardNew({ service }) {
  const navigate = useNavigate();

  const { image, title, description, id } = service || {};

  return (
    <div>
      <div className="single-services service-style-one">
        <div className="services-inner  with-shadow card-bg-color">
          <div className="thumbnail">
            <img src={image} alt={title} referrerPolicy="no-referrer" />
          </div>
          <div className="services-content">
            <a>
              <h5 className="title">{title}</h5>
            </a>
            <div
              className="description"
              dangerouslySetInnerHTML={{
                __html: `${description
                  .replace(/<[^>]+>/g, "")
                  .slice(0, 190)}...`,
              }}
            ></div>

            <a
              className="angle-roted"
              onClick={() => navigate(`/services/${id}`)}
            >
              <FaArrowRight />
            </a>
          </div>
          <div className="number">{id > 10 ? id - 1 : `0${id - 1}`}</div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCardNew;

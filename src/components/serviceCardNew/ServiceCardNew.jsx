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
            <img src="/images/web-dev.png" alt={service.title} />
            {/* <img
              src="https://www.nectardigit.com/uploads/photos/service%20icon/digital-marketing-01-1.png"
              alt={service.title}
            /> */}
            {/* <img src={service.image} alt={service.title} /> */}
          </div>
          <div className="services-content">
            <a>
              <h5 className="title">{service.title}</h5>
            </a>
            <div
              className="description"
              dangerouslySetInnerHTML={{
                __html: `${service.description
                  .replace(/<[^>]+>/g, "")
                  .slice(0, 190)}...`,
              }}
            ></div>

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

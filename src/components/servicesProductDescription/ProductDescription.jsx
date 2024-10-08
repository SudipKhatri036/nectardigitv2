import { useNavigate, useParams } from "react-router-dom";
import {
  FaChevronRight,
  FaEnvelope,
  FaGlobe,
  FaMapPin,
  FaPhoneAlt,
} from "react-icons/fa";
import Accordian from "../accordian/Accordian";
import PageHero from "../pageHero/PageHero";
import useAxios from "../../hooks/useAxios";
import Loader from "../loader/Loader";

import "./ProductDescription.css";

function ServiceProductDescription() {
  const { id } = useParams();

  const navigate = useNavigate();

  const { data, isLoading, error } = useAxios(`/services/${id}`, "GET", null, [
    id,
  ]);

  const { data: service } = useAxios("services");

  const filteredService = service?.data.filter(
    (ser) => ser.id !== data?.data.id
  );

  let randomNum = Math.floor(Math.random() * filteredService?.length) + 1;

  const maxNum =
    randomNum === filteredService?.length - 1
      ? (randomNum = 0) + 5
      : randomNum + 5;

  if (isLoading) <Loader />;

  if (error) return <p className="fetch-error">Error: {error.message}</p>;

  return (
    <section>
      <PageHero
        imgSrc="/images/web-development.jpg"
        pageName={data?.data.title}
      />
      <div className="single-service mt">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="single-services-img">
                <img
                  src="/images/website-development-1.jpg"
                  alt="Website development"
                />
              </div>

              <div className="single-service-content">
                <h3>{data?.data.title}</h3>

                <div
                  dangerouslySetInnerHTML={{
                    __html: data?.data.description,
                  }}
                />
                <Accordian />
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="service-sidebar-wrap">
                <div className="service-sidebar service-sidebar-bg">
                  <h3>Our Services</h3>

                  <ul>
                    {filteredService
                      ?.slice(randomNum, maxNum)
                      .map((service) => {
                        return (
                          <li key={service.id}>
                            <button
                              onClick={() =>
                                navigate(`/services/${service?.id}`)
                              }
                            >
                              <FaChevronRight /> {service.title}
                            </button>
                          </li>
                        );
                      })}
                  </ul>
                </div>

                <div className="service-contact service-sidebar-bg">
                  <h3>Contact Us</h3>

                  <ul>
                    <li>
                      <a href="#">
                        <FaMapPin /> Unit 82A James Carter Road, Mildenhall,
                        Bury St. Edmunds, England, IP28 7DE, UK and Sundhara,
                        Kathmandu, Nepal
                      </a>
                    </li>
                    <li>
                      <a href="tel:9807555929">
                        <FaPhoneAlt />
                        9807555929
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@nectardigit.com">
                        <FaEnvelope />
                        info@nectardigit.com
                      </a>
                    </li>

                    <li>
                      <a href="https://www.nectardigit.com">
                        <FaGlobe /> https://www.nectardigit.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceProductDescription;

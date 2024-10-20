import { FaArrowRight } from "react-icons/fa";
import "./ClientList.css";
import ClientCarousel from "../clientCarousel/ClientCarousel";
import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import Loader from "../loader/Loader";

function ClientList() {
  const { data, isLoading } = useAxios("/clients");

  return (
    <section className="logo-section mb">
      <div className="container">
        <div className="logo-section-wrap">
          <div className="row">
            <div className="col-lg-2 col-md-12 cont">
              <div className="logo-title">
                <h3>Our Clients</h3>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-6 col-xs-6 carosel-cont">
              {isLoading ? (
                <Loader />
              ) : (
                <ClientCarousel clientsData={data?.data} />
              )}
            </div>
            <div className="col-lg-3 col-md-5 col-sm-6 col-xs-6">
              <div className="client-btn">
                <Link
                  to="/portfolio"
                  className="btn btn-primary-round btn-round "
                  title="Portfolio"
                >
                  View More Clients
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientList;

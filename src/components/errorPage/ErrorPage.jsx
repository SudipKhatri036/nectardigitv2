import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import "./ErrorPage.css";

function ErrorPage() {
  return (
    <section className="error-page">
      <div className="container">
        <div className="row error-wrapper">
          <div className="col-lg-8">
            <div className="bulb-svg">
              <img src="/images/bulb.svg" alt="Broken Bulb" />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="error-content">
              <p className="error-title">404</p>

              <p className="error-desc">Looks Like You're Lost</p>
              <span>The page you are looking for not availble!</span>

              <Link to="/">
                Go to Home <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ErrorPage;

import { Link } from "react-router-dom";
import "./Footer.css";
import {
  FaAngleDoubleRight,
  FaEnvelopeOpenText,
  FaRegMap,
} from "react-icons/fa";
import { IoAlarm } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import NewsLetter from "../newsLetter/NewsLetter";
import SocialIconsCont from "../socialIconsCont/SocialIconsCont";
import useAxios from "../../hooks/useAxios";
import Loader from "../loader/Loader";

function Footer() {
  const { data, isLoading, error } = useAxios("/services");

  if (isLoading) return <Loader />;

  if (error) return <p className="fetch-error">Error: {error.message}</p>;

  return (
    <footer className="footer">
      <div className="container">
        <NewsLetter />
        <div className="row">
          <div className="col-lg-3 col-md-12">
            <div className="footer-content">
              <div className="footer-logo">
                <img src="/images/site-logo.png" alt="Nectar Digit Logo" />
              </div>
              <p>
                Best and reliable Digital Marketing company with expertise in
                SEO, Software Development, Web Design / Development, and Mobile
                application
              </p>

              <div className="opening-hour">
                <IoAlarm className="footer-icon" />
                <div>
                  <p>Sunday - Friday</p>
                  <p>10:00 AM - 6:00 PM</p>
                </div>
              </div>

              <SocialIconsCont />
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="footer-wrap footer-space">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li>
                  <Link to="/" title="Home">
                    <FaAngleDoubleRight className="a-before" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" title="About">
                    <FaAngleDoubleRight className="a-before" />
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/ourteam" title="Team">
                    <FaAngleDoubleRight className="a-before" />
                    Team
                  </Link>
                </li>
                <li>
                  <Link to="/career" title="Career">
                    <FaAngleDoubleRight className="a-before" />
                    Career
                  </Link>
                </li>
                <li>
                  <Link to="/contact" title="Contact">
                    <FaAngleDoubleRight className="a-before" />
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="privacy-and-policy" title="Privacy and Policy">
                    <FaAngleDoubleRight className="a-before" />
                    Privacy and Policy
                    <i className="fas fa-coffee"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="footer-wrap footer-space1">
              <h3>Our Services</h3>
              <ul className="footer-links">
                {data?.data.slice(0, 6).map((data) => {
                  return (
                    <li key={data?.id}>
                      <Link to={`services/${data?.id}`}>
                        <FaAngleDoubleRight className="a-before" />
                        {data?.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="footer-wrap">
              <h3>Official info</h3>

              <div className="footer-contact-wrap">
                <div className="footer-contact-icon">
                  <a
                    href="https://g.page/nectardigit?share"
                    title="Unit 82A James Carter Road, Mildenhall, Bury St. Edmunds, England, IP28 7DE, UK and Sundhara, Kathmandu, Nepal"
                    target="_blank"
                  >
                    <FaRegMap />
                  </a>
                </div>
                <div className="footer-contact-content">
                  <a
                    href="https://g.page/nectardigit?share"
                    title="Unit 82A James Carter Road, Mildenhall, Bury St. Edmunds, England, IP28 7DE, UK and Sundhara, Kathmandu, Nepal"
                    target="_blank"
                  >
                    Unit 82A James Carter Road, Mildenhall, Bury St. Edmunds,
                    England, IP28 7DE, UK and Sundhara, Kathmandu, Nepal
                  </a>
                </div>
              </div>

              <div className="footer-contact-wrap footer-contact-link">
                <div className="footer-contact-icon">
                  <FaEnvelopeOpenText />
                </div>
                <div className="footer-contact-content">
                  <span>E-mail:</span>
                  <a href="mailto:info@nectardigit.com">info@nectardigit.com</a>
                </div>
              </div>

              <div className="footer-contact-wrap footer-contact-link">
                <div className="footer-contact-icon">
                  <FiPhone />
                </div>
                <div className="footer-contact-content ">
                  <span>Phone</span>
                  <div className="footer-contact-flx">
                    <a href="tel:9807555929">
                      <span>9807555929</span>
                    </a>
                    <a href="tel:015904030">
                      <span>015904030</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <ul>
            <li>
              <p>Copyright © 2024 Nectar Digit. All Right Reserved.</p>
            </li>
            <li>
              Design &amp; Developed By :{" "}
              <a href="https://www.nectardigit.com/" target="_blank">
                Nectar Digit
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

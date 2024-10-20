import "./CompanyAddress.css";
import { FaEnvelopeOpenText, FaMapLocationDot } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";

function CompanyAddress() {
  return (
    <ul className="contact-link-cont">
      <li>
        <div className="contact-link-flx">
          <div className="icon">
            <FiPhone />
          </div>
          <div className="content">
            <span>Call Us</span>
            <a href="tel:9807555929">9807555929, 015904030</a>
          </div>
        </div>
      </li>
      <li>
        <div className="contact-link-flx">
          <div className="icon">
            <FaEnvelopeOpenText />
          </div>
          <div className="content">
            <span>E-mail</span>
            <a href="mailto:info@nectardigit.com">info@nectardigit.com</a>
          </div>
        </div>
      </li>
      <li>
        <div className="contact-link-flx">
          <div className="icon">
            <FaMapLocationDot />
          </div>
          <div className="content">
            <span>Address</span>
            <ul>
              <li>
                <a href="#">James Carter Road, Mildenhall</a>
              </li>
              <li>
                <a href="#">England, IP28 7DE, UK</a>
              </li>
              <li>
                <a href="#">Sundhara, Kathmandu, Nepal</a>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default CompanyAddress;

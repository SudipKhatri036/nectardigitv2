import "./SocialIconsCont.css";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

function SocialIconsCont() {
  return (
    <div className="social-links">
      <ul>
        <li>
          <a href="https://www.facebook.com/nectardigit/" target="_blank">
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a href="https://np.linkedin.com/company/nectardigit" target="_blank">
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/nectardigit" target="_blank">
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/nectar.digit/?hl=en"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialIconsCont;

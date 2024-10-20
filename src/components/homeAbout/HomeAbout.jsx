import { Link } from "react-router-dom";
import {
  FaAppStore,
  FaAt,
  FaCloudUploadAlt,
  FaDatabase,
  FaHashtag,
  FaHtml5,
  FaJava,
  FaLightbulb,
  FaNetworkWired,
  FaPencilRuler,
  FaSearch,
  FaShoppingBag,
  FaTv,
  FaUserLock,
  FaWordpress,
} from "react-icons/fa";
import "./HomeAbout.css";

function HomeAbout() {
  return (
    <section className="home-about">
      <div className="container">
        <div className="home-about-title">
          <h3>How Can Your Company Get Benefit From Nectar Digit?</h3>
          <p>
            See some of the industries we have vast experience working in as a
            full-service.
          </p>
          <Link to={"/services"} className="main-btn1">
            View More Services
          </Link>
        </div>
        <div className="home-about-wrap">
          <div className="home-about-item">
            <FaCloudUploadAlt />
            <span>Domain Registration</span>
          </div>
          <div className="home-about-item">
            <FaAt />
            <span>Web/Email Hosting</span>
          </div>
          <div className="home-about-item">
            <FaTv />
            <span>Responsive Website Design</span>
          </div>
          <div className="home-about-item">
            <FaHtml5 />
            <span>Website Development</span>
          </div>
          <div className="home-about-item">
            <FaLightbulb />
            <span>Digital Marketing</span>
          </div>
          <div className="home-about-item">
            <FaSearch />
            <span>Search Engine Optimization</span>
          </div>
          <div className="home-about-item">
            <FaWordpress />
            <span>Wordpress/CMS Solutions</span>
          </div>
          <div className="home-about-item">
            <FaShoppingBag />
            <span>Ecommerce/Online Store Solution</span>
          </div>
          <div className="home-about-item">
            <FaAppStore />
            <span>Custom Application Development</span>
          </div>
          <div className="home-about-item">
            <FaDatabase />
            <span>Software Architect Design and Development</span>
          </div>
          <div className="home-about-item">
            <FaHashtag />
            <span>Social Media Optimization</span>
          </div>
          <div className="home-about-item">
            <FaJava />
            <span>Mobile Application Development</span>
          </div>
          <div className="home-about-item">
            <FaUserLock />
            <span>Data Security</span>
          </div>
          <div className="home-about-item">
            <FaPencilRuler />
            <span>Graphic Design</span>
          </div>
          <div className="home-about-item">
            <FaNetworkWired />
            <span>Hardware Networking</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;

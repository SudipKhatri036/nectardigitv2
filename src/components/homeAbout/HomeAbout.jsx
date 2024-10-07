import { Link } from "react-router-dom";
import { FaCloudUploadAlt } from "react-icons/fa";
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
            <FaCloudUploadAlt />
            <span>Web/Email Hosting</span>
          </div>
          <div className="home-about-item">
            <FaCloudUploadAlt />
            <span>Responsive Website Design</span>
          </div>
          <div className="home-about-item">
            <FaCloudUploadAlt />
            <span>Website Development</span>
          </div>
          <div className="home-about-item">
            <FaCloudUploadAlt />
            <span>Digital Marketing</span>
          </div>
          <div className="home-about-item">
            <FaCloudUploadAlt />
            <span>Search Engine Optimization</span>
          </div>
          <div className="home-about-item">
            <FaCloudUploadAlt />
            <span>Wordpress/CMS Solutions</span>
          </div>
          <div className="home-about-item">
            <FaCloudUploadAlt />
            <span>Ecommerce/Online Store Solution</span>
          </div>
          <div className="home-about-item">
            <FaCloudUploadAlt />
            <span>Custom Application Development</span>
          </div>
          <div className="home-about-item">
            <FaCloudUploadAlt />
            <span>Software Architect Design and Development</span>
          </div>
          <div className="home-about-item">
            <FaCloudUploadAlt />
            <span>Social Media Optimization</span>
          </div>
          <div className="home-about-item">
            <FaCloudUploadAlt />
            <span>Mobile Application Development</span>
          </div>
          <div className="home-about-item">
            <FaCloudUploadAlt />
            <span>Data Security</span>
          </div>
          <div className="home-about-item">
            <FaCloudUploadAlt />
            <span>Graphic Design</span>
          </div>
          <div className="home-about-item">
            <FaCloudUploadAlt />
            <span>Hardware Networking</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;

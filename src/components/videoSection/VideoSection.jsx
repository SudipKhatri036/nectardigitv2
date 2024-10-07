import { FaPlay } from "react-icons/fa";
import "./VideoSection.css";

function VideoSection() {
  return (
    <section className="video-section mb">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="videos-section-content">
              <span>How we satisfy you</span>
              <h2>We Help You to Grow Your Business Quickly</h2>
              <p></p>
              <div className="video-popup">
                <a
                  className="popup-youtube-left pulse1"
                  href="https://www.youtube.com/watch?v=V00TZgYN-jc"
                  target="_blank"
                >
                  <FaPlay className="fa" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="video-section-img">
              <img
                src="/images/video-post-homeppage-01-01.png"
                alt="We Help You to Grow Your Business Quickly"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;

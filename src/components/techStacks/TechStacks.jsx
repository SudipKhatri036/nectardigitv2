import Slider from "react-slick";
import SectionHeading from "../sectionHeading/SectionHeading";
import "./TechStacks.css";

function TechStacks() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    speed: 500,
    pauseOnHover: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <section>
      <div className="container pt pb">
        <SectionHeading
          heading="Technology We"
          headingHighlight="Work With"
          subheading="Technology we Work with in Development"
        />

        <Slider {...settings}>
          <div className="tech-slide" inert="true">
            <img src="/techs/atom.png" alt="Icon" className="tech-icon" />
          </div>
          <div className="tech-slide" inert="true">
            <img src="/techs/css.png" alt="Icon" className="tech-icon" />
          </div>
          <div className="tech-slide" inert="true">
            <img src="/techs/html.png" alt="Icon" className="tech-icon" />
          </div>
          <div className="tech-slide" inert="true">
            <img src="/techs/docker.png" alt="Icon" className="tech-icon" />
          </div>
          <div className="tech-slide" inert="true">
            <img src="/techs/js.png" alt="Icon" className="tech-icon" />
          </div>
          <div className="tech-slide" inert="true">
            <img src="/techs/php.png" alt="Icon" className="tech-icon" />
          </div>
          <div className="tech-slide" inert="true">
            <img src="/techs/java.png" alt="Icon" className="tech-icon" />
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default TechStacks;

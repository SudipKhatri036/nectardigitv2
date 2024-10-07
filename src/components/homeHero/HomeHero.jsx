import ParticlesBackground from "../particles/ParticlesBackground";
import "./HomeHero.css";
import Slider from "react-slick";

function HomeHero() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    speed: 500,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <section className="home-hero">
      <div className="container">
        <div className="slide-wrap grid grid--2-cols">
          <div className="slider-info">
            <h1 className="heading-primary">
              Lets Grow Together and Be Success
            </h1>
            <p>Nectar Digit</p>
          </div>
          <div className="slider-container">
            <Slider {...settings}>
              <div className="img-cont">
                <img src="./images/form-img.png" alt="Home hero" />
              </div>
              <div className="img-cont">
                <img src="./images/form-img.png" alt="Home hero" />
              </div>
              <div className="img-cont">
                <img src="./images/form-img.png" alt="Home hero" />
              </div>
            </Slider>
          </div>
        </div>
        <ParticlesBackground />
      </div>
    </section>
  );
}

export default HomeHero;

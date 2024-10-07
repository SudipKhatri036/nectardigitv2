import Slider from "react-slick";
import "./ClientCarousel.css";

function ClientCarousel({ clientsData }) {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    speed: 500,
    pauseOnHover: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {clientsData.map((client) => {
        <div className="slide">
          <img src={client.logo} alt="client" />
        </div>;
      })}
      <div className="slide">
        <img src="/images/complete-cop-solution.png" alt="" />
      </div>
      <div className="slide">
        <img src="./images/qandufurniture.jpg" alt="" />
      </div>
      <div className="slide">
        <img src="/images/complete-cop-solution.png" alt="" />
      </div>
      <div className="slide">
        <img src="./images/qandufurniture.jpg" alt="" />
      </div>
      <div className="slide">
        <img src="/images/complete-cop-solution.png" alt="" />
      </div>
    </Slider>
  );
}

export default ClientCarousel;

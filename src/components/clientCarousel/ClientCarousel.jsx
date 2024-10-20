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
      {clientsData?.client.map((client) => {
        return (
          <div className="slide" key={client.id}>
            <img src={client.logo} alt="client" referrerPolicy="no-referrer" />
          </div>
        );
      })}
    </Slider>
  );
}

export default ClientCarousel;

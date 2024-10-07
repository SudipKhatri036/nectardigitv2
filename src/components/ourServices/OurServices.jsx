import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeading from "../sectionHeading/SectionHeading";
import ServiceCardNew from "../serviceCardNew/ServiceCardNew";
import useAxios from "../../hooks/useAxios";
import Loader from "../loader/Loader";
import "./OurServices.css";

function OurServices() {
  const { data, isLoading, error } = useAxios("/services");

  if (isLoading) return <Loader />;

  if (error) return <p className="fetch-error">Error: {error.message}</p>;

  return (
    <section className="our-services">
      <div className="container">
        <SectionHeading
          heading="Our"
          headingHighlight="Services"
          subheading="We provide a range of IT related services at reasonable cost and with highest quality possible."
        />
        <div className="row">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 4000,
            }}
            loop={true}
            speed={1000}
            breakpoints={{
              995: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            (
            {data?.data &&
              data.data.map((service) => {
                return (
                  <SwiperSlide key={service.id}>
                    <ServiceCardNew service={service} />
                  </SwiperSlide>
                );
              })}
            )
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default OurServices;

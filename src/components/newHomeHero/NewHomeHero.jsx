import "./NewHomeHero.css";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import VideoModal from "../videoModal/VideoModal";
import { useState } from "react";

function NewHomeHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="hero-slide">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
        }}
        speed={1000}
        loop={true}
      >
        <SwiperSlide>
          <div className="bg_image-1 hero-swiper-cont">
            <div className="shape-image-banner-one">
              <img src="images/shapes/01.png" alt="banner" className="one" />
              <img src="images/shapes/02.png" alt="banner" className="two" />
              <img src="images/shapes/03.png" alt="banner" className="three" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="banner-one-main-wrapper">
                    <div className="inner">
                      <span className="sub-title">
                        Business Consulting Agency
                      </span>
                      <h1 className="title">Powering Business Growth</h1>
                      <p className="disc">
                        We help small startups grow from idea to millions of
                        users. we can also <br />
                        automate your marketing and customer service.
                      </p>
                      <div className="button-area-banner-one">
                        <a href="service.html" className="tmp-btn btn-primary">
                          Get Started Now
                        </a>

                        <div
                          className="vedio-icon"
                          data-tmp-cursor="lg"
                          data-tmp-cursor-text="Play Video"
                        >
                          <a
                            className="video-play-button play-video"
                            onClick={() => setIsModalOpen(true)}
                          >
                            <span></span>
                            <p className="text">Play Vedio</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg_image-2 hero-swiper-cont">
            <div className="shape-image-banner-one">
              <img src="images/shapes/01.png" alt="banner" className="one" />
              <img src="images/shapes/02.png" alt="banner" className="two" />
              <img src="images/shapes/03.png" alt="banner" className="three" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="banner-one-main-wrapper">
                    <div className="inner">
                      <span className="sub-title">
                        Business Consulting Agency
                      </span>
                      <h1 className="title">Powering Business Growth</h1>
                      <p className="disc">
                        We help small startups grow from idea to millions of
                        users. we can also <br />
                        automate your marketing and customer service.
                      </p>
                      <div className="button-area-banner-one">
                        <a href="service.html" className="tmp-btn btn-primary">
                          Get Started Now
                        </a>

                        <div
                          className="vedio-icon"
                          data-tmp-cursor="lg"
                          data-tmp-cursor-text="Play Video"
                        >
                          <a
                            className="video-play-button play-video"
                            onClick={() => setIsModalOpen(true)}
                          >
                            <span></span>
                            <p className="text">Play Vedio</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg_image-3 hero-swiper-cont">
            <div className="shape-image-banner-one">
              <img src="images/shapes/01.png" alt="banner" className="one" />
              <img src="images/shapes/02.png" alt="banner" className="two" />
              <img src="images/shapes/03.png" alt="banner" className="three" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="banner-one-main-wrapper">
                    <div className="inner">
                      <span className="sub-title">
                        Business Consulting Agency
                      </span>
                      <h1 className="title">Powering Business Growth</h1>
                      <p className="disc">
                        We help small startups grow from idea to millions of
                        users. we can also <br />
                        automate your marketing and customer service.
                      </p>
                      <div className="button-area-banner-one">
                        <a href="service.html" className="tmp-btn btn-primary">
                          Get Started Now
                        </a>

                        <div
                          className="vedio-icon"
                          data-tmp-cursor="lg"
                          data-tmp-cursor-text="Play Video"
                        >
                          <a
                            className="video-play-button play-video"
                            onClick={() => setIsModalOpen(true)}
                          >
                            <span></span>
                            <p className="text">Play Vedio</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div
          className="swiper-button-prev"
          data-tmp-cursor="md transparent fw-bold"
          data-tmp-cursor-text="Prev"
          tabIndex="0"
          role="button"
          aria-label="Previous slide"
          aria-controls="swiper-wrapper-bbc59754465dd610a"
        >
          <FaArrowLeft />
        </div>

        <div
          className="swiper-button-next"
          data-tmp-cursor-text="Next"
          tabIndex="0"
          role="button"
          aria-label="Next slide"
          aria-controls="swiper-wrapper-bbc59754465dd610a"
        >
          <FaArrowRight />
        </div>
      </Swiper>
      {isModalOpen && <VideoModal setIsModalOpen={setIsModalOpen} />}
    </section>
  );
}

export default NewHomeHero;

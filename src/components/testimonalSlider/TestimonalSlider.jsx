import "./TestimonalSlider.css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeading from "../sectionHeading/SectionHeading";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
  FaStar,
  FaStarHalfStroke,
} from "react-icons/fa6";

function TestimonalSlider() {
  return (
    <section className="testimonal-cont pt pb">
      <div className="container testimonal-wrapper">
        <div className="row">
          <div className="col-lg-12">
            <div className="testimonials-button-area">
              <SectionHeading
                heading="What People Say About"
                headingHighlight="Our Company"
              />

              <div className="button-next-prev">
                <div
                  className="swiper-button-prev"
                  role="button"
                  aria-label="Previous slide"
                  aria-controls="swiper-wrapper-bbc59754465dd610a"
                >
                  <FaChevronRight />
                </div>
                <div
                  className="swiper-button-next"
                  role="button"
                  aria-label="Next slide"
                  aria-controls="swiper-wrapper-bbc59754465dd610a"
                >
                  <FaChevronLeft />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              spaceBetween={50}
              slidesPerView={1}
              autoplay={true}
              loop={true}
              breakpoints={{
                995: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
              }}
            >
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="single-card card-horizontal">
                    <div className="card-inner">
                      <div className="content">
                        <div className="rating rating-style-three">
                          <div className="stars-group">
                            <div className="star">
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStarHalfStroke />
                            </div>
                          </div>
                        </div>
                        <p className="description">
                          Its incredible. its really wonderful. company has
                          completely surpassed our expect. Urna porttitor
                          rhoncus dolor purus non enim praesent at the facilisis
                          lectus. Adipiscing tristique risus.
                        </p>
                        <div className="content content-without-bg">
                          <div className="name">Lara Willie</div>
                          <div className="designation">UX Designer</div>
                        </div>
                      </div>
                      <div className="thumbnail">
                        <img src="images/testimonial-1.jpg" alt="testimonial" />
                        <div className="icon icon-quote">
                          <FaQuoteLeft />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="single-card card-horizontal">
                    <div className="card-inner">
                      <div className="content">
                        <div className="rating rating-style-three">
                          <div className="stars-group">
                            <div className="star">
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStarHalfStroke />
                            </div>
                          </div>
                        </div>
                        <p className="description">
                          Its incredible. its really wonderful. company has
                          completely surpassed our expect. Urna porttitor
                          rhoncus dolor purus non enim praesent at the facilisis
                          lectus. Adipiscing tristique risus.
                        </p>
                        <div className="content content-without-bg">
                          <div className="name">Lara Willie</div>
                          <div className="designation">UX Designer</div>
                        </div>
                      </div>
                      <div className="thumbnail">
                        <img src="images/testimonial-1.jpg" alt="testimonial" />
                        <div className="icon icon-quote">
                          <FaQuoteLeft />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="single-card card-horizontal">
                    <div className="card-inner">
                      <div className="content">
                        <div className="rating rating-style-three">
                          <div className="stars-group">
                            <div className="star">
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStarHalfStroke />
                            </div>
                          </div>
                        </div>
                        <p className="description">
                          Its incredible. its really wonderful. company has
                          completely surpassed our expect. Urna porttitor
                          rhoncus dolor purus non enim praesent at the facilisis
                          lectus. Adipiscing tristique risus.
                        </p>
                        <div className="content content-without-bg">
                          <div className="name">Lara Willie</div>
                          <div className="designation">UX Designer</div>
                        </div>
                      </div>
                      <div className="thumbnail">
                        <img src="images/testimonial-1.jpg" alt="testimonial" />
                        <div className="icon icon-quote">
                          <FaQuoteLeft />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide">
                  <div className="single-card card-horizontal">
                    <div className="card-inner">
                      <div className="content">
                        <div className="rating rating-style-three">
                          <div className="stars-group">
                            <div className="star">
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStarHalfStroke />
                            </div>
                          </div>
                        </div>
                        <p className="description">
                          Its incredible. its really wonderful. company has
                          completely surpassed our expect. Urna porttitor
                          rhoncus dolor purus non enim praesent at the facilisis
                          lectus. Adipiscing tristique risus.
                        </p>
                        <div className="content content-without-bg">
                          <div className="name">Lara Willie</div>
                          <div className="designation">UX Designer</div>
                        </div>
                      </div>
                      <div className="thumbnail">
                        <img src="images/testimonial-1.jpg" alt="testimonial" />
                        <div className="icon icon-quote">
                          <FaQuoteLeft />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonalSlider;

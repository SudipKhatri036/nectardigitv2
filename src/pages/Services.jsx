import React from "react";
import useAxios from "../hooks/useAxios";
import PageHero from "../components/pageHero/PageHero";
import SectionHeading from "../components/sectionHeading/SectionHeading";
import ServiceCardNew from "../components/serviceCardNew/ServiceCardNew";
import Loader from "../components/loader/Loader";
import "./Services.css";
import { useService } from "../context/ServicesContext";

function Services() {
  const { data, isLoading, error } = useService();

  if (isLoading) return <Loader />;

  if (error) return <p className="fetch-error">Error: {error.message}</p>;

  return (
    <main>
      <PageHero imgSrc="/images/service-banner-01-1.png" pageName="Services" />
      <section className="service-page mt">
        <div className="container">
          <SectionHeading />

          {isLoading ? (
            <Loader />
          ) : (
            <div className="row">
              {data &&
                data.data.map((service) => {
                  return (
                    <div
                      key={service.id}
                      className="col-lg-4 col-md-6 service-page-cont"
                    >
                      <ServiceCardNew service={service} />
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default Services;

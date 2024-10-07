import React from "react";
import PageHero from "../components/pageHero/PageHero";
import AboutUs from "../components/aboutUs/AboutUs";
import Mission from "../components/mission/Mission";
import CustomerSatisfaction from "../components/customerSatisfaction/CustomerSatisfaction";
import useAxios from "../hooks/useAxios";
import Loader from "../components/loader/Loader";

function About() {
  const { data, isLoading, error } = useAxios("/about");

  if (isLoading) return <Loader />;

  if (error) return <p className="fetch-error">Error: {error.message}</p>;

  return (
    <main className="about">
      <PageHero imgSrc="/images/about-banner-01.png" pageName="About Us" />
      <AboutUs missionData={data?.data.slice(0, 3)} />
      <CustomerSatisfaction
        aboutSatisfy={data?.data.slice(3, data.data.length)}
      />
    </main>
  );
}

export default About;

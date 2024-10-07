import React, { useEffect, useState } from "react";
import HomeHero from "../components/homeHero/homeHero";
import OurServices from "../components/ourServices/OurServices";
import HomeAbout from "../components/homeAbout/HomeAbout";
import HomeBlog from "../components/homeblog/HomeBlog";
import HomeCounters from "../components/homeCounters/HomeCounters";
import Faq from "../components/faq/Faq";
import VideoSection from "../components/videoSection/VideoSection";
import ClientList from "../components/clientsList/ClientList";
import ParticlesBackground from "../components/particles/ParticlesBackground";
import NewContact from "../components/newContact/NewContact";
import NewHomeHero from "../components/newHomeHero/NewHomeHero";
import TestimonalSlider from "../components/testimonalSlider/TestimonalSlider";

function Home() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  return (
    <main>
      <NewHomeHero />
      <ClientList />
      <HomeAbout />
      <OurServices />
      <Faq />
      <HomeCounters />
      <TestimonalSlider />
      <NewContact />
      {screenWidth >= 1580 ? null : <ParticlesBackground />}
    </main>
  );
}

export default Home;

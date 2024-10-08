import React, { useState } from "react";

import OurServices from "../components/ourServices/OurServices";
import HomeAbout from "../components/homeAbout/HomeAbout";
import HomeCounters from "../components/homeCounters/HomeCounters";
import Faq from "../components/faq/Faq";

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

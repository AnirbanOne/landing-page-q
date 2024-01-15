import React from "react";
import Hero from "../components/Hero";
import { heroBanners } from "../assets/carousel";
import CardSection from "../components/CardSection";
import AdvertisementBanner from "../components/AdvertisementBanner";
import CloudSolutions from "../components/CloudSolutions";
import TrustBanner from "../components/TrustBanner";
import WorldLayout from "../components/WorldLayout";
import MeetTeam from "../components/MeetTeam";
import StandOut from "../components/StandOut";


const Home = () => {
  return (
    <>
      <section className="h-[693px] shadow-[0px_9px_8px_0px_#a0aec0] ">
        <Hero />
      </section>

      <section className="px-8 md:px-10 lg:px-[100px] ">
        <CardSection />
        <AdvertisementBanner />
        <CloudSolutions />
        <TrustBanner />
        <WorldLayout />
        <StandOut />
        <MeetTeam />
      </section>
    </>
  );
};

export default Home;

import React from "react";
import HomePageCarousel from "./HomePageCarousel/HomePageCarousel";
import FeaturedPost from "./FeaturedPost/FeaturedPost";
import DestionationsHompage from "./DestinationsHomepage/DestionationsHompage";
import FeaturedTours from "./FeaturedTours/FeaturedTours";
import FeaturedTickets from "./FeaturedTickets/FeaturedTickets";

const SectionHome = () => {
  return (
    <div className="container  mt-12">
      <HomePageCarousel />
      <DestionationsHompage />
      <FeaturedPost />
      <FeaturedTickets />
      <FeaturedTours />
    </div>
  );
};

export default SectionHome;

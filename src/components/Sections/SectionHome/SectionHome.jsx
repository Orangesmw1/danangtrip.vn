import React from "react";
import HomePageCarousel from "./HomePageCarousel/HomePageCarousel";
import FeaturedPost from "./FeaturedPost/FeaturedPost";
import DestionationsHompage from "./DestinationsHomepage/DestionationsHompage";

const SectionHome = () => {
  return (
    <div className="container mx-auto px-20 mt-12">
      <HomePageCarousel />
      <DestionationsHompage />
      <FeaturedPost />
    </div>
  );
};

export default SectionHome;

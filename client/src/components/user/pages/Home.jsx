import React from "react";
import FeaturedCards from "./home-sections/FeaturedCards";
import FeaturedProducts from "./home-sections/FeaturedProducts";
import LatestProducts from "./home-sections/LatestProducts";
import Banner from "./home-sections/Banner";
import Review from "./home-sections/Review";
import OtherProducts from "./home-sections/OtherProducts";
import Carousel from "./home-sections/Carousel";

function Home() {
  return (
    <>
      <Carousel />
      <FeaturedCards />
      <FeaturedProducts />
      <Banner />
      <LatestProducts />
      <OtherProducts />
      <Review />
    </>
  );
}

export default Home;

import React from "react";
import Banner from "../../components/banner/banner";
import CategoryCard from "../../components/cards/CategoryCard";
import RecentListing from "../../components/recentListing/RecentListing";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>

      <div>
        <CategoryCard></CategoryCard>
      </div>

    <div>
        <RecentListing></RecentListing>
    </div>

    </div>
  );
};

export default Home;

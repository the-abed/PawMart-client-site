import React from "react";
import Banner from "../../components/banner/banner";
import CategoryCard from "../../components/cards/CategoryCard";
import RecentListing from "../../components/recentListing/RecentListing";
import WhyAdopt from "../../components/WhyAdopt/WhyAdopt";
import PetHeroes from "../../components/petHeroes/PetHeroes";

const Home = () => {
  return (
    <div>

      <section>
        <Banner></Banner>
      </section>

      <section>
        <CategoryCard></CategoryCard>
      </section>

    <section>
        <RecentListing></RecentListing>
    </section>

    <section>
      <WhyAdopt></WhyAdopt>
    </section>

    <section>
      <PetHeroes></PetHeroes>
    </section>

    </div>
  );
};

export default Home;

import React from "react";
import Banner from "../../components/banner/banner";
import CategoryCard from "../../components/cards/CategoryCard";
import RecentListing from "../../components/recentListing/RecentListing";
import WhyAdopt from "../../components/WhyAdopt/WhyAdopt";
import PetHeroes from "../../components/petHeroes/PetHeroes";
import PageTitle from "../../components/common/PageTitle";

const Home = () => {
  return (
    <div>
      <PageTitle title="Home"></PageTitle>
      <section data-aos="fade-up" data-aos-duration="1200">
        <Banner></Banner>
      </section>

      <section data-aos="fade-left" data-aos-duration="1000">
        <CategoryCard></CategoryCard>
      </section>

    <section>
        <RecentListing></RecentListing>
    </section>

    <section data-aos="fade-right" data-aos-duration="1000">
      <WhyAdopt></WhyAdopt>
    </section>

    <section>
      <PetHeroes></PetHeroes>
    </section>

    </div>
  );
};

export default Home;

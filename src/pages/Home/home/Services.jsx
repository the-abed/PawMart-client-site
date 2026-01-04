import React from "react";

const Services = () => {
  return (
    <section className="py-10 px-4 md:px-16 my-12 w-11/12 mx-auto">
      <div className="bg-base-300 rounded-[40px] p-8 md:p-12 shadow-md">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <p className="text-primary font-medium mb-2">Our Mission 🐾</p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Services for the Pet Community</h2>
            <p className="mb-6 text-sm md:text-base" style={{ color: "var(--color-text-primary)" }}>
              We connect responsible breeders and pet shops with loving families. Our platform is built on trust and the love for animals.
            </p>
            <ul className="space-y-4">
              {["Verified Pet Adoption Listings", "Premium Pet Food Marketplace", "Direct Seller Contact"].map((item, i) => (
                <li key={i} className="flex items-center gap-3" style={{ color: "var(--color-text-primary)" }}>
                  <span className="bg-primary text-white p-1 rounded-full text-[10px]">✔</span>
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-4 w-full">
            <div className="bg-base-100 p-8 rounded-2xl shadow text-center border border-base-200">
              <span className="text-3xl font-bold text-secondary">100%</span>
              <p className="text-xs text-primary font-bold">Safe Adoption</p>
            </div>
            <div className="bg-base-100 p-8 rounded-2xl shadow text-center border border-base-200">
              <span className="text-3xl font-bold text-secondary">24/7</span>
              <p className="text-xs text-primary font-bold">Community Support</p>
            </div>
            <div className="col-span-2 bg-primary/10 p-5 rounded-2xl text-center italic text-secondary font-medium border border-primary/20">
              "Making every tail wag, one home at a time."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
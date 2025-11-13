import React from "react";
import { Typewriter } from "react-simple-typewriter";
import PageTitle from "./PageTitle";


const AboutUs = () => {
  return (
    <div
      className="min-h-screen py-24 px-4 md:px-16 transition-colors duration-300"
      style={{ backgroundColor: "var(--color-base-100)", color: "var(--color-text-primary)" }}
    >
        <PageTitle title="About PawMart" />
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4 text-primary">
            <Typewriter
              words={["About PawMart"]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            PawMart is a community-driven platform connecting pet owners, breeders, and shops with
            buyers and adopters. Our mission is to make pet adoption and shopping seamless, safe, 
            and enjoyable for everyone.
          </p>
        </div>

        {/* Our Mission */}
        <div className="bg-base-200 rounded-2xl p-8 md:p-12 shadow-md transition-colors duration-300">
          <h2 className="text-3xl font-semibold mb-4 text-primary">Our Mission</h2>
          <p className="text-base md:text-lg">
            At PawMart, we strive to create a trustworthy platform where pets find loving homes
            and owners can easily access high-quality pet products. By empowering the community 
            to list, browse, and order directly, we foster transparency, convenience, and care 
            in every transaction.
          </p>
        </div>

        {/* How it Works */}
        <div className="bg-base-200 rounded-2xl p-8 md:p-12 shadow-md transition-colors duration-300">
          <h2 className="text-3xl font-semibold mb-4 text-primary">How It Works</h2>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg">
            <li>
              <strong>For Sellers & Breeders:</strong> List your pets or pet products with detailed 
              descriptions, images, and pricing to reach a community of interested buyers.
            </li>
            <li>
              <strong>For Buyers & Adopters:</strong> Browse listings, contact sellers directly, 
              and place orders or arrange adoptions easily.
            </li>
            <li>
              <strong>Community First:</strong> Engage with fellow pet lovers, read reviews, 
              and make informed decisions.
            </li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4 text-primary">Join the PawMart Community</h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto mb-6">
            Whether you’re looking to adopt a pet, sell products, or simply connect with other 
            pet enthusiasts, PawMart welcomes you to explore, engage, and grow with us.
          </p>
          <a
            href="/register"
            className="btn btn-primary px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-text-primary)",
            }}
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

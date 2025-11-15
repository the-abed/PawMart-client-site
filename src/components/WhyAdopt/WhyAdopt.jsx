import React from "react";
import { FaPaw, FaHeart, FaHandsHelping, FaHome } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const WhyAdopt = () => {
  const adoptFeatures = [
    {
      icon: <FaPaw className="text-4xl text-green-500" />,
      title: "Save a Life",
      desc: "Every adoption gives a pet a loving home and a second chance at life.",
    },
    {
      icon: <FaHeart className="text-4xl text-pink-500" />,
      title: "Reduce Overcrowding",
      desc: "Adopting helps shelters make room for more animals in need.",
    },
    {
      icon: <FaHandsHelping className="text-4xl text-yellow-500" />,
      title: "Support Ethical Practices",
      desc: "Adopting discourages puppy mills and unethical breeding.",
    },
    {
      icon: <FaHome className="text-4xl text-blue-500" />,
      title: "Forever Home",
      desc: "Give a pet a safe, loving home and enjoy unconditional companionship.",
    },
  ];

  return (
    <div
      className="grid md:grid-cols-2 items-stretch my-12"
      style={{ color: "var(--color-primary)" }}
    >
      {/* Left Section */}
      <section className="bg-base-300 py-16 px-6 md:px-12 flex flex-col justify-center shadow-inner">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">
            Why Adopt From PawMart?
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            <Typewriter
              words={["Giving Pets a Second Chance"]}
              loop={1}
              cursor
              cursorStyle=""
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {adoptFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-base-200 rounded-xl shadow hover:shadow-lg transition"
            >
              <div>{feature.icon}</div>
              <div>
                <h3 className="font-semibold text-lg text-secondary mb-2">
                  {feature.title}
                </h3>
                <p className="" style={{ color: "var(--color-text-primary)" }}>
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Right Section */}
      <section className="relative">
        <img
          src="https://i.ibb.co.com/FLC5yBKV/j-balla-photography-F57x-Lufncj8-unsplash.jpg"
          alt="Adopt a Pet"
          className="w-full h-full object-cover "
        />
      </section>
    </div>
  );
};

export default WhyAdopt;

import React from "react";
import { motion } from "framer-motion";

const heroes = [
  {
    name: "Emily & Max",
    role: "Dog Adopter",
    story: "Emily rescued Max, a stray Labrador, and now they spend every weekend volunteering at local shelters.",
    img: "https://i.ibb.co.com/hxdcYSfs/diogo-paulos-iz-AXd4-XLh4-unsplash.jpg",
  },
  {
    name: "Rifat & Coco",
    role: "Cat Lover",
    story: "Rifat adopted Coco during his university days. Now, Coco helps him manage stress and brings daily joy.",
    img: "https://i.ibb.co.com/gc3HNZX/rubaitul-azad-Yb-Ce4o-CA4-GA-unsplash.jpg",
  },
  {
    name: "Sophia & Bella",
    role: "Animal Caregiver",
    story: "Sophia fosters abandoned pets and helps them recover until they find their forever homes.",
    img: "https://i.ibb.co.com/KxBbzNjT/Screenshot-2025-11-13-162903.png",
  },
  {
    name: "Arjun & Bruno",
    role: "Rescue Volunteer",
    story: "Arjun works with local rescue teams, ensuring every pet gets medical attention and love.",
    img: "https://i.ibb.co.com/fzJx1N3H/image.png",
  },
];

const PetHeroes = () => {
  return (
    <section className=" py-16 px-4 md:px-16 my-12 w-11/12 mx-auto ">
      <div className="text-center mb-12">
        <p className="text-primary font-medium mb-2">Meet Our Pet Heroes 🐕‍🦺</p>
        <h2 className="text-3xl md:text-4xl font-bold text-secondary">
          Heartwarming Stories of Love & Rescue
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {heroes.map((hero, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-base-300 rounded-2xl shadow hover:shadow-lg overflow-hidden text-center"
          >
            <img
              src={hero.img}
              alt={hero.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-5" style={{ color: "var(--color-text-primary)" }} >
              <h3 className="text-xl font-semibold  mb-1 text-secondary">
                {hero.name}
              </h3>
              <p className="text-sm  mb-3 text-primary">{hero.role}</p>
              <p className=" text-sm">{hero.story}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PetHeroes;

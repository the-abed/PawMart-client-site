import React from "react";
import { Link } from "react-router";
import { FaDog, FaBone, FaPaw, FaCapsules } from "react-icons/fa";

const CategoryCard = () => {
  const categories = [
    { name: "Pets (Adoption)", icon: <FaDog className="w-10 h-10" />, path: "/category/Pets" },
    { name: "Pet Food", icon: <FaBone className="w-10 h-10" />, path: "/category/Pet Food" },
    { name: "Accessories", icon: <FaPaw className="w-10 h-10" />, path: "/category/Accessories" },
    { name: "Pet Care Products", icon: <FaCapsules className="w-10 h-10" />, path: "/category/Pet Care Products" },
  ];

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 p-4 w-11/12 mx-auto my-12">
      {categories.map((cat, index) => (
        <Link
          key={index}
          to={cat.path}
          className="group flex flex-col items-center justify-center p-6 rounded-xl bg-base-100 dark:bg-base-300 shadow-md border border-neutral-200 dark:border-neutral-700 hover:shadow-xl hover:border-primary transition-all text-center"
        >
          <div className="text-primary mb-3 text-4xl">
            {cat.icon}
          </div>
          <h3 className="font-semibold text-lg  transition-colors " style={{ color: "var(--color-text-primary)" }}>
            {cat.name}
          </h3>
        </Link>
      ))}
    </div>
  );
};

export default CategoryCard;

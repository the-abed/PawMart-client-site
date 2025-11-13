import React from "react";
import { Link } from "react-router";

const CategoryCard = () => {
const categories = [
  { name: "Pets (Adoption)", emoji: "🐶", path: "/category/Pets" },
  { name: "Pet Food", emoji: "🍖", path: "/category/Pet Food" },
  { name: "Accessories", emoji: "🧸", path: "/category/Accessories" },
  { name: "Pet Care Products", emoji: "💊", path: "/category/Pet Care Products" },
];



  return (
    <div className="grid md:grid-cols-4 gap-6 p-4 w-10/12 mx-auto my-8" style={{ color: "var(--color-primary)" }}>
      {categories.map((cat, index) => (
        <Link
          key={index}
          to={cat.path}
          className="card bg-base-100 dark:bg-base-300 shadow-lg p-6 text-center hover:shadow-xl transition"
        >
          <div className="text-4xl mb-2">{cat.emoji}</div>
          <h3 className="text-lg font-semibold">{cat.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default CategoryCard;

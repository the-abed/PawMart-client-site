import React from "react";
import { useNavigate } from "react-router";

const categories = [
  { name: "Pets (Adoption)", emoji: "🐶", path: "/products?category=pets" },
  { name: "Pet Food", emoji: "🍖", path: "/products?category=food" },
  { name: "Accessories", emoji: "🧸", path: "/products?category=accessories" },
  { name: "Pet Care Products", emoji: "💊", path: "/products?category=care" },
];

const CategoryCard = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 max-w-10/12 mx-auto my-5">
      {categories.map((category, index) => (
        <div
          key={index}
          onClick={() => navigate(category.path)}
          className="cursor-pointer rounded-2xl shadow-md p-6 bg-base-200 hover:bg-base-300 transition-all duration-300 text-center border border-[var(--color-border)]"
          style={{ color: "var(--color-text-primary)" }}
        >
          <div className="text-5xl mb-3">{category.emoji}</div>
          <h3 className="text-lg font-semibold">{category.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default CategoryCard;

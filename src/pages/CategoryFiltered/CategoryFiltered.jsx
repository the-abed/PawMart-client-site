import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const CategoryFiltered = () => {
  const { categoryName } = useParams();
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  if (!categoryName) return;

  // Capitalize first letter to match DB entries if needed
  const formattedCategory = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

  fetch(`http://localhost:5000/listings?category=${formattedCategory}`)
    .then((res) => res.json())
    .then((data) => {
      setListings(data);
      setLoading(false);
    })
    .catch((err) => console.error("Error fetching listings:", err));
}, [categoryName]);


  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (listings.length === 0)
    return (
      <p className="text-center py-10">No listings found for {categoryName}</p>
    );

  return (
    <div className="grid md:grid-cols-3 gap-6 p-4">
      {listings.map((item) => (
        <div
          key={item._id}
          className="card bg-base-100 shadow-xl border border-gray-200 hover:shadow-lg"
        >
          <figure>
            <img
              src={item.image}
              alt={item.name}
              className="h-48 w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <p className="text-sm text-gray-600">{item.location}</p>
            <p className="text-gray-800 font-semibold">
              {item.category === "Pets"
                ? "For Adoption"
                : `Price: $${item.price}`}
            </p>
            <p className="text-gray-500">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryFiltered;

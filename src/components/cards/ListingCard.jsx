import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const ListingCard = ({ listing }) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/listing/${listing._id}`); // navigate to details page with listing ID
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <div
        className="rounded-2xl shadow-md p-5 border transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
        style={{
          backgroundColor: "var(--color-base-100)",
          color: "var(--color-text-primary)",
          borderColor: "var(--color-border)",
        }}
      >
        {/* Image */}
        <img
          src={listing.image}
          alt={listing.name}
          className="w-full h-52 object-cover rounded-xl mb-4"
        />

        {/* Name and Category */}
        <h2 className="text-xl font-bold mb-1">{listing.name}</h2>
        <p
          className="text-sm font-medium mb-2"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {listing.category} • {listing.location}
        </p>

        {/* Price */}
        <p className="text-lg font-semibold mb-2">
          Price: {listing.Price === 0 ? "Free" : `৳${listing.Price}`}
        </p>

        {/* Description */}
        <p className="text-sm mb-4" style={{ color: "var(--color-muted)" }}>
          {listing.description}
        </p>

        {/* Contact & Date */}
        <div className="flex justify-between items-center text-xs mb-4">
          <span>{listing.email}</span>
          <span>{listing.date}</span>
        </div>

        {/* See Details Button */}
        <button
          onClick={handleDetailsClick}
          className="mt-auto px-4 py-2 rounded-lg font-semibold"
          style={{
            backgroundColor: "var(--color-primary)",
            color: "var(--color-text-primary)",
          }}
        >
          See Details
        </button>
      </div>
    </motion.div>
  );
};

export default ListingCard;

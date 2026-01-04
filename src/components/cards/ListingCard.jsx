import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const ListingCard = ({ listing }) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/listing/${listing._id}`);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      // Ensure the motion wrapper takes full height of the grid cell
      className="rounded-2xl shadow hover:shadow-lg h-full"
    >
      <div
        className="rounded-2xl shadow-md border transition-all duration-300 hover:shadow-lg flex flex-col h-full"
        data-aos="fade-up"
        data-aos-duration="1000"
        style={{
          backgroundColor: "var(--color-base-100)",
          color: "var(--color-text-primary)",
          borderColor: "var(--color-border)",
        }}
      >
        {/* Fixed Image Height */}
        <img
          src={listing.image}
          alt={listing.name}
          className="w-full h-56 object-cover rounded-t-2xl flex-shrink-0"
        />

        {/* Content Area - flex-1 makes this section grow to fill space */}
        <div className="p-5 bg-base-200 flex flex-col flex-1">
          
          {/* Top part of content */}
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-1 text-secondary line-clamp-1">
              {listing.name}
            </h2>
            <p
              className="text-sm font-medium mb-2"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {listing.category} • {listing.location}
            </p>
          </div>

          <hr className="text-gray-400 my-2" />

          {/* Bottom part stays at the bottom */}
          <div className="flex justify-between items-center mt-auto">
            <p className="text-lg font-semibold">
              {listing.Price === 0 ? "Free" : `৳${listing.Price}`}
            </p>

            <button
              onClick={handleDetailsClick}
              className="px-4 py-2 rounded-lg font-semibold myBtn"
            >
              See Details
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ListingCard;
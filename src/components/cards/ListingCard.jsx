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
      className=" rounded-2xl shadow hover:shadow-lg "
    >
      <div
        className="rounded-2xl shadow-md  border transition-all duration-300 hover:shadow-lg flex flex-col justify-between "
         data-aos="fade-up" data-aos-duration="1000"
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
          className="w-full h-56 object-cover rounded-t-2xl"
        />

       <div className="p-5 bg-base-200">
         {/* Name and Category */}
        <h2 className="text-xl font-bold mb-1 text-secondary">{listing.name}</h2>
        <p
          className="text-sm font-medium mb-2"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {listing.category} • {listing.location}
        </p>

       
        {/* Description */}
        <p className="text-sm mb-4" style={{ color: "var(--color-text-primary)" }}>
          {listing.description}
        </p>
        <hr className="text-gray-400" />

       <div className="flex justify-between items-center mt-2">

         {/* Price */}
        <p className="text-lg font-semibold mb-2">
          Price: {listing.Price === 0 ? "Free" : `৳${listing.Price}`}
        </p>

         {/* See Details Button */}
        <button
          onClick={handleDetailsClick}
          className="mt-auto px-4 py-2 rounded-lg font-semibold myBtn"
          // style={{
          //   backgroundColor: "var(--color-primary)",
          //   color: "var(--color-text-primary)",
          // }}
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

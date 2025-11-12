import React, { useEffect, useState } from "react";
import ListingCard from "../cards/ListingCard";
import { div } from "framer-motion/client";

const RecentListing = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all listings from the server
    fetch("http://localhost:5000/listings")
      .then((res) => res.json())
      .then((data) => {
        // Sort by date descending and take the latest 6
        const sorted = data
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 6);
        setListings(sorted);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching listings:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center p-6">Loading recent listings...</p>;
  }

  return (
    <div className="max-w-10/12 mx-auto my-5">
        <h2 className="text-5xl font-bold mb-4 text-center text-primary">Recent Listings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ">
        {listings.map((listing) => (
          <ListingCard key={listing._id} listing={listing} />
        ))}
      </div>
    </div>
  );
};

export default RecentListing;

import React, { useEffect, useState } from "react";
import ListingCard from "../cards/ListingCard";
import { div } from "framer-motion/client";
import LoaderSpinner from "../common/LoaderSpinner";

const RecentListing = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all listings from the server
    fetch("https://paw-mart-server-lyart.vercel.app/recent-listings")
      .then((res) => res.json())
      .then((data) => {
        setListings(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching listings:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <LoaderSpinner></LoaderSpinner>;
  }

  return (
    <div className="py-16  md:px-16 my-12 w-11/12 mx-auto">
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

import React, { useEffect, useState } from "react";
import LoaderSpinner from "../../components/common/LoaderSpinner";
import ListingCard from "../../components/cards/ListingCard";
import PageTitle from "../../components/common/PageTitle";

const PetsAndSupplies = () => {
  const [listings, setListings] = useState([]);
  const [filteredListings, setFilteredListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://paw-mart-server-lyart.vercel.app/listings")
      .then((res) => res.json())
      .then((data) => {
        setListings(data);
        setFilteredListings(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching listings:", err);
        setLoading(false);
      });
  }, []);

  // Filter & search logic
  useEffect(() => {
    let filtered = listings;

    if (category !== "All") {
      filtered = filtered.filter((item) => item.category === category);
    }

    if (search.trim() !== "") {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredListings(filtered);
  }, [category, search, listings]);

  if (loading) return <LoaderSpinner />;

  return (
    <div className="py-16 px-4 md:px-16 my-6 w-11/12 mx-auto">
      <PageTitle title="Pets and Supplies"></PageTitle>
      <h2 className="text-5xl font-bold mb-6 text-center text-primary">
        Pets and <span className="text-secondary">Supplies</span>
      </h2>

      {/* Filters Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8  p-4">
        {/* Category Filter */}
        <div className="flex items-center gap-2">
          <label className="font-semibold text-primary">Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="select select-bordered w-48 "
            style={{ color: "var(--color-text-primary)" }}
          >
            <option value="All">All</option>
            <option value="Pets">Pets</option>
            <option value="Food">Food</option>
            <option value="Accessories">Accessories</option>
            <option value="Care Products">Care Products</option>
          </select>
        </div>

        {/* Search Bar */}
        <div className="flex items-center gap-2 w-full sm:w-1/3">
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered w-full"
            style={{ color: "var(--color-text-primary)" }}
          />
        </div>
      </div>

      {/* Listings */}
      {filteredListings.length === 0 ? (
        <p className="text-center text-lg text-gray-500 py-10">
          No listings found.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {filteredListings.map((listing) => (
            <ListingCard key={listing._id} listing={listing} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PetsAndSupplies;

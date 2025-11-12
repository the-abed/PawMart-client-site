import React, { useEffect, useState } from 'react';
import LoaderSpinner from '../../components/common/LoaderSpinner';
import ListingCard from '../../components/cards/ListingCard';

const PetsAndSupplies = () => {
  const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Fetch all listings from the server
      fetch("http://localhost:5000/listings")
        .then((res) => res.json())
        .then((data) => {
          // Sort by date descending and take the latest 6
          
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
  

export default PetsAndSupplies;
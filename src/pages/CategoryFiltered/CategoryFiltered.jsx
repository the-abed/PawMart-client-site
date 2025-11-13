import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import LoaderSpinner from "../../components/common/LoaderSpinner";
import ListingCard from "../../components/cards/ListingCard";

const CategoryFiltered = () => {
  const { categoryName } = useParams();
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

   const categoryApiMap = {
    "Pets": "https://paw-mart-server-lyart.vercel.app/categories/pets",
    "Pet Food": "https://paw-mart-server-lyart.vercel.app/categories/pet-food",
    "Accessories": "https://paw-mart-server-lyart.vercel.app/categories/accessories",
    "Pet Care Products": "https://paw-mart-server-lyart.vercel.app/categories/pet-care-products",
  };

  useEffect(() => {
    if (!categoryName || !categoryApiMap[categoryName]) return;

    setLoading(true);
    fetch(categoryApiMap[categoryName])
      .then((res) => res.json())
      .then((data) => {
        setListings(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching listings:", err);
        setLoading(false);
      });
  }, [categoryName]);


  if (loading) return <LoaderSpinner></LoaderSpinner>;
  
  if (listings.length === 0)
    return (
      <p className="text-center py-10">No listings found for {categoryName}</p>
    );

  return (
    <div className="grid md:grid-cols-3 gap-6 p-4 w-10/12 mx-auto my-8">
      {listings.map((listing) => (
       <ListingCard key={listing._id} listing={listing}></ListingCard>
      ))}
    </div>
  );
};

export default CategoryFiltered;

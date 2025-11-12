import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import OrderModal from "../../components/modal/OrderModal";
import LoaderSpinner from "../../components/common/LoaderSpinner";


const ListingDetails = ({ currentUser }) => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/listings/${id}`)
      .then((res) => res.json())
      .then((data) => setListing(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!listing) return <LoaderSpinner></LoaderSpinner>;

  return (
    <div className="p-6 max-w-4xl mx-auto" 
    style={{
        backgroundColor: "var(--color-base-100)",
        color: "var(--color-text-primary)",
        borderColor: "var(--color-border)",
      }}>
      {/* Image */}
      <img
        src={listing.image}
        alt={listing.name}
        className="w-full h-96 object-cover rounded-xl mb-6"
      />

      {/* Details */}
      <h1 className="text-3xl font-bold mb-2">{listing.name}</h1>
      <p className="text-sm font-medium mb-1">Category: {listing.category}</p>
      <p className="text-sm mb-1">Owner: {listing.email}</p>
      <p className="mb-2">{listing.description}</p>
      <p className="font-semibold mb-1">
        Price: {listing.Price === 0 ? "Free" : `৳${listing.Price}`}
      </p>
      <p className="text-sm mb-4">Location: {listing.location}</p>

      {/* Adopt / Order Button */}
      <button
        onClick={() => setShowModal(true)}
        className="px-6 py-3 rounded-lg font-semibold"
        style={{
          backgroundColor: "var(--color-primary)",
          color: "var(--color-text-primary)",
        }}
      >
        🛒 Adopt / Order Now
      </button>

      {/* Order Modal */}
      {showModal && (
        <OrderModal
          listing={listing}
          currentUser={currentUser}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default ListingDetails;

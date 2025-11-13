import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import LoaderSpinner from "../../components/common/LoaderSpinner";
import { AuthContext } from "../../contexts/AuthContext";

const UpdateListing = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch listing
  useEffect(() => {
    fetch(`https://paw-mart-server-lyart.vercel.app/listings/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setListing(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to load listing");
        setLoading(false);
      });
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!listing) return;

    setLoading(true);

    // Prepare payload
    const updatedListing = {
      name: listing.name,
      category: listing.category,
      price: listing.category === "Pets" ? 0 : Number(listing.price),
      location: listing.location,
      description: listing.description,
      image: listing.image,
      date: listing.date,
      email: user?.email,
    };

    try {
      const res = await fetch(`https://paw-mart-server-lyart.vercel.app/listings/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedListing),
      });

      const data = await res.json();

      if (data.modifiedCount || data.acknowledged) {
        toast.success("Listing updated successfully!");
        navigate("/my-listings");
      } else {
        toast.error("Nothing was updated.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error updating listing.");
    } finally {
      setLoading(false);
    }
  };

  if (loading || !listing) return <LoaderSpinner />;

  return (
    <div className="max-w-2xl mx-auto p-8 bg-base-300 rounded-2xl shadow my-10" 
         style={{ color: "var(--color-text-primary)" }}>
      <Toaster position="top-center" />
      <h2 className="text-2xl font-bold text-center mb-6 text-primary">
        Update Listing
      </h2>

      <form className="space-y-4" onSubmit={handleUpdate}>
        <input
          type="text"
          value={listing.name || ""}
          onChange={(e) => setListing({ ...listing, name: e.target.value })}
          className="input input-bordered w-full"
          placeholder="Product/Pet Name"
          required
        />

        <select
          value={listing.category || "Pets"}
          onChange={(e) => setListing({ ...listing, category: e.target.value })}
          className="select select-bordered w-full"
          required
        >
          <option>Pets</option>
          <option>Food</option>
          <option>Accessories</option>
          <option>Care Products</option>
        </select>

        <input
          type="number"
          value={listing.price || 0}
          onChange={(e) => setListing({ ...listing, price: e.target.value })}
          className="input input-bordered w-full"
          placeholder="Price"
          min="0"
        />

        <input
          type="text"
          value={listing.location || ""}
          onChange={(e) => setListing({ ...listing, location: e.target.value })}
          className="input input-bordered w-full"
          placeholder="Location"
          required
        />

        <textarea
          value={listing.description || ""}
          onChange={(e) => setListing({ ...listing, description: e.target.value })}
          className="textarea textarea-bordered w-full"
          placeholder="Description"
          required
        />

        <input
          type="url"
          value={listing.image || ""}
          onChange={(e) => setListing({ ...listing, image: e.target.value })}
          className="input input-bordered w-full"
          placeholder="Image URL"
        />

        <input
          type="date"
          value={listing.date || ""}
          onChange={(e) => setListing({ ...listing, date: e.target.value })}
          className="input input-bordered w-full"
          required
        />

        <button type="submit" className="btn btn-primary w-full mt-4">
          Update Listing
        </button>
      </form>
    </div>
  );
};

export default UpdateListing;

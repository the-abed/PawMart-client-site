import React, { useContext, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthContext";
import LoaderSpinner from "../../components/common/LoaderSpinner";
import PageTitle from "../../components/common/PageTitle";

const AddListing = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");

  const handleAddListing = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const listingData = {
      name: form.name.value,
      category: form.category.value,
      price: form.category.value === "Pets" ? 0 : parseFloat(form.price.value),
      location: form.location.value,
      description: form.description.value,
      image: form.image.value,
      date: form.date.value,
      email: user?.email,
    };

    try {
      const res = await fetch(
        "https://paw-mart-server-lyart.vercel.app/listings",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(listingData),
        }
      );

      const data = await res.json();
      if (data.insertedId || data.acknowledged) {
        toast.success(" Listing added successfully!");
        form.reset();
      } else {
        toast.error("Failed to add listing. Try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("❌ Error connecting to server.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoaderSpinner></LoaderSpinner>;


  return (
    <div
      className="max-w-2xl mx-auto bg-base-300 rounded-2xl shadow-lg p-8 my-10 "
      style={{ color: "var(--color-text-primary)" }}
    >
      <PageTitle title="Add New Listing"></PageTitle>
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="text-2xl font-bold text-center mb-6 text-primary">
        🐾 Add New Listing
      </h2>

      <form onSubmit={handleAddListing} className="space-y-4">
        {/* Product/Pet Name */}
        <div>
          <label className="block mb-1 font-semibold">Product/Pet Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter product or pet name"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-semibold">Category</label>
          <select
            name="category"
            onChange={(e) => setCategory(e.target.value)}
            className="select select-bordered w-full"
            required
          >
            <option disabled selected>
              Select category
            </option>
            <option>Pets</option>
            <option>Food</option>
            <option>Accessories</option>
            <option>Care Products</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block mb-1 font-semibold">Price</label>
          <input
            type="number"
            name="price"
            placeholder="Enter price"
            className="input input-bordered w-full"
            min="0"
            step="0.01"
            required
            disabled={category === "Pets"}
          />
        </div>

        {/* Location */}
        <div>
          <label className="block mb-1 font-semibold">Location</label>
          <input
            type="text"
            name="location"
            placeholder="Enter location"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-semibold">Description</label>
          <textarea
            name="description"
            placeholder="Describe your listing"
            className="textarea textarea-bordered w-full"
            required
          ></textarea>
        </div>

        {/* Image URL */}
        <div>
          <label className="block mb-1 font-semibold">Image URL</label>
          <input
            type="url"
            name="image"
            placeholder="https://example.com/image.jpg"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Date */}
        <div>
          <label className="block mb-1 font-semibold">
            Pick Up / Availability Date
          </label>
          <input
            type="date"
            name="date"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={user?.email || ""}
            readOnly
            className="input input-bordered w-full  cursor-not-allowed"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-full mt-4"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Listing"}
        </button>
      </form>
    </div>
  );
};

export default AddListing;

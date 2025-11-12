import React, { useState } from "react";

const OrderModal = ({ listing, currentUser, onClose }) => {
  const [formData, setFormData] = useState({
    buyerName: currentUser?.name || "",
    email: currentUser?.email || "",
    listingId: listing._id,
    listingName: listing.name,
    quantity: listing.category.toLowerCase() === "pets" ? 1 : 1,
    price: listing.Price,
    address: "",
    date: "",
    phone: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("✅ Order placed successfully!");
        onClose();
      })
      .catch((err) => {
        console.error(err);
        alert("❌ Failed to place order");
      });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-base-100 p-6 rounded-2xl max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4">Place Order</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="buyerName"
            value={formData.buyerName}
            readOnly
            className="w-full p-2 rounded border"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            readOnly
            className="w-full p-2 rounded border"
          />
          <input
            type="text"
            name="listingId"
            value={formData.listingId}
            readOnly
            className="w-full p-2 rounded border"
          />
          <input
            type="text"
            name="listingName"
            value={formData.listingName}
            readOnly
            className="w-full p-2 rounded border"
          />
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            readOnly={listing.category.toLowerCase() === "pets"}
            onChange={handleChange}
            className="w-full p-2 rounded border"
          />
          <input
            type="number"
            name="price"
            value={formData.price}
            readOnly
            className="w-full p-2 rounded border"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full p-2 rounded border"
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-2 rounded border"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-2 rounded border"
          />
          <textarea
            name="notes"
            placeholder="Additional Notes"
            value={formData.notes}
            onChange={handleChange}
            className="w-full p-2 rounded border"
          />

          <button
            type="submit"
            className="w-full py-2 rounded-lg font-semibold mt-2"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-text-primary)",
            }}
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderModal;

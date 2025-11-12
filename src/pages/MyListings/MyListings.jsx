import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthContext";
import LoaderSpinner from "../../components/common/LoaderSpinner";

const MyListings = () => {
  const { user } = useContext(AuthContext);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
console.log(user.email);
  // Fetch user's own listings
  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:5000/myListings?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setListings(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to load your listings");
      });
  }, [user]);

  // Delete listing
  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this listing?")) return;

    fetch(`http://localhost:5000/listings/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then(() => {
        setListings(listings.filter((item) => item._id !== id));
        toast.success("Listing deleted successfully");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to delete listing");
      });
  };

  if (loading) return <LoaderSpinner></LoaderSpinner>;

  if (listings.length === 0)
    return <p className="text-center py-10 dark">You have no listings yet.</p>;

  return (
    <div className="p-4 dark">
      <h2 className="text-3xl font-bold mb-6">My Listings</h2>
      <div className="overflow-x-auto">
        <table className="table w-full border border-gray-200 dark:border-gray-700 dark">
          <thead className="bg-base-200 dark:bg-base-300">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Location</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {listings.map((item) => (
              <tr key={item._id}>
                <td>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>
                  {item.category === "Pets" ? "For Adoption" : `$${item.price}`}
                </td>
                <td>{item.location}</td>
                <td>{item.date}</td>
                <td className="flex gap-2">
                  {/* Update button: open modal or navigate to update page */}
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => toast("Update modal/page not implemented yet")}
                  >
                    Update
                  </button>
                  {/* Delete button */}
                  <button
                    className="btn btn-sm btn-error"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyListings;

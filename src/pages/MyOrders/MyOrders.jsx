import React, { useContext, useEffect, useState } from "react";

import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthContext";
import LoaderSpinner from "../../components/common/LoaderSpinner";

const MyOrders = () => {
  const { user } = useContext(AuthContext); // logged-in user
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(user.email);

  // Fetch orders for the logged-in user
  useEffect(() => {
    if (!user?.email) return;

    fetch(`https://paw-mart-server-lyart.vercel.app/myOrders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to load your orders");
        setLoading(false);
      });
  }, [user]);

  if (loading) return <LoaderSpinner></LoaderSpinner>;
  if (orders.length === 0) return <p className="text-center py-10" style={{ color: "var(--color-text-primary)" }}>You have no orders.</p>;

  return (
    <div className="p-4 w-10/12 mx-auto bg-base-100 my-8" style={{ color: "var(--color-text-primary)" }}>     
     <h2 className="text-3xl font-bold mb-6 text-center text-primary" >My Orders</h2>
      <div className="overflow-x-auto">
        <table className="table w-full border border-gray-200 dark:border-gray-700">
          <thead className="bg-base-200 " style={{ color: "var(--color-text-primary)" }}>
            <tr>
              <th>Product/Listing</th>
              <th>Buyer Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Address</th>
              <th>Date</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order.listingName}</td>
                <td>{order.buyerName}</td>
                <td>${order.price}</td>
                <td>{order.quantity}</td>
                <td>{order.address}</td>
                <td>{order.date}</td>
                <td>{order.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;

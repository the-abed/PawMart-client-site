import React, { useContext, useEffect, useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthContext";
import LoaderSpinner from "../../components/common/LoaderSpinner";
import PageTitle from "../../components/common/PageTitle";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Export table to PDF function
  const exportTableToPdf = () => {
    try {
      const doc = new jsPDF();
      let yPosition = 20;

      doc.setFontSize(16);
      doc.text("My Orders", 14, 10);
      doc.setFontSize(10);

      // Define the table structure
      const tableColumn = [
        "Product/Listing",
        "Buyer Name",
        "Price",
        "Quantity",
        "Address",
        "Date",
        "Phone",
      ];
      const columnWidths = [25, 20, 15, 15, 35, 20, 20];

      // Draw header row
      doc.setFillColor(200, 200, 200);
      doc.setTextColor(0, 0, 0);
      doc.setFont(undefined, "bold");
      let xPosition = 10;
      tableColumn.forEach((col, index) => {
        doc.rect(xPosition, yPosition, columnWidths[index], 8, "F");
        doc.text(col, xPosition + 2, yPosition + 5);
        xPosition += columnWidths[index];
      });

      yPosition += 10;

      // Draw data rows
      doc.setFont(undefined, "normal");
      doc.setTextColor(0, 0, 0);
      orders.forEach((order) => {
        if (yPosition > 280) {
          doc.addPage();
          yPosition = 20;
        }

        const rowData = [
          order.listingName || "",
          order.buyerName || "",
          `$${order.price}`,
          order.quantity,
          order.address || "",
          order.date || "",
          order.phone || "",
        ];

        xPosition = 10;
        rowData.forEach((data, index) => {
          doc.text(String(data).substring(0, 15), xPosition + 2, yPosition + 5);
          doc.rect(xPosition, yPosition, columnWidths[index], 8);
          xPosition += columnWidths[index];
        });

        yPosition += 8;
      });

      doc.save("MyOrders.pdf");
      toast.success("PDF exported successfully!");
    } catch (error) {
      console.error("PDF export error:", error);
      toast.error("Error exporting PDF");
    }
  };

  // Fetch orders for the logged-in user
  useEffect(() => {
    if (!user?.email) return;

    fetch(
      `https://paw-mart-server-lyart.vercel.app/myOrders?email=${user.email}`
    )
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

  if (loading) return <LoaderSpinner />;
  if (orders.length === 0)
    return (
      <p
        className="text-center py-10"
        style={{ color: "var(--color-text-primary)" }}
      >
        You have no orders.
      </p>
    );

  return (
    <div
      className="p-4 w-10/12 mx-auto bg-base-100 my-8"
      style={{ color: "var(--color-text-primary)" }}
    >
      <PageTitle title="My Orders"></PageTitle>
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">
        My Orders
      </h2>

      <div className="overflow-x-auto">
        <table
          id="myOrders"
          className="table w-full border border-gray-200 dark:border-gray-700"
        >
          <thead
            className="bg-base-200"
            style={{ color: "var(--color-text-primary)" }}
          >
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

        <div className="flex justify-end mt-4">
          <button className="btn btn-primary" onClick={exportTableToPdf}>
            Export to PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;

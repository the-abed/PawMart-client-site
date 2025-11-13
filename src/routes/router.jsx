import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import CategoryFiltered from "../pages/CategoryFiltered/CategoryFiltered";
import ListingDetails from "../pages/ListingDetails/ListingDetails";
import AddListing from "../pages/AddListing/AddListing";
import MyListings from "../pages/MyListings/MyListings";
import MyOrders from "../pages/MyOrders/MyOrders";
import PrivateRoute from "../routes/PrivateRoute";
import PetsAndSupplies from "../pages/PetsAndSupplies/PetsAndSupplies";
import UpdateListing from "../pages/UpdateListing/UpdateListing";
import Contact from "../components/common/Contact";
import AboutUs from "../components/common/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <Home></Home> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register /> },
      { path: "/pets-supplies", element: <PetsAndSupplies></PetsAndSupplies> },
      {
        path: "/category/:categoryName",
        element: <CategoryFiltered />,
      },
      {
        path: "/listing/:id",
        element: (
          <PrivateRoute>
            <ListingDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-listing",
        element: (
          <PrivateRoute>
            <AddListing />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-listings",
        element: (
          <PrivateRoute>
            <MyListings />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-orders",
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-listing/:id",
        element: <UpdateListing></UpdateListing>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>
      }
    ],
  },
]);

export default router;

import React, { useContext } from "react";
import { NavLink } from "react-router"; // use react-router-dom
import logo from "../../assets/PawMart.png";
import ThemeController from "./ThemeController";
import { AuthContext } from "../../contexts/AuthContext";


const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  // Links for before login
  const guestLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/pets-supplies">Pets & Supplies</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );

  // Links for after login
  const userLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/pets-supplies">Pets & Supplies</NavLink>
      </li>
      <li>
        <NavLink to="/add-listing">Add Listing</NavLink>
      </li>
      <li>
        <NavLink to="/my-listings">My Listings</NavLink>
      </li>
      <li>
        <NavLink to="/my-orders">My Orders</NavLink>
      </li>
    </>
  );

  return (
    <div
      className="navbar bg-base-100 max-w-10/12 mx-auto my-5 rounded-[50px] text-primary shadow-lg hover:shadow-[0_8px_6px_var(--shadow-color)] transition duration-300 ease-in-out p-4"
      
    >
      {/* Left: Logo */}
      <div className="navbar-start flex items-center gap-2">
        <img className="w-34 ml-10" src={logo} alt="PawMart Logo" />
      </div>

      {/* Center: Links */}
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 gap-4 ">
          {user ? userLinks : guestLinks}
        </ul>
      </div>

      {/* Right: Theme + Profile */}
      <div className="navbar-end flex items-center gap-4">
        <ThemeController />
        {user ? (
          <div className="flex items-center gap-3">

            <div className="tooltip tooltip-bottom"
                  data-tip={user.displayName || ""}>
                <img
                  src={user.photoURL || "https://i.ibb.co/3W9yqVx/default-avatar.png"}
                  alt="Profile"
                  className="w-10 h-10 rounded-full cursor-pointer"
                />
              
            </div>
            <button
              onClick={signOutUser}
              className="btn btn-ghost"
              style={{
                color: "var(--color-text-primary)",
              }}
            >
              Logout
            </button>
          </div>
        ) : null}

        {/* Mobile Dropdown */}
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow-[0_1px_2px_var(--shadow-color)] border-b-2"
          >
            {user ? userLinks : guestLinks}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useContext, useState } from "react";
import { NavLink } from "react-router";
import logo from "../../assets/PawMart.png";
import ThemeController from "./ThemeController";
import { AuthContext } from "../../contexts/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const guestLinks = (
    <>
      <li>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/pets-supplies" onClick={() => setMenuOpen(false)}>Pets & Supplies</NavLink>
      </li>
      <li>
        <NavLink to="/login" onClick={() => setMenuOpen(false)}>Login</NavLink>
      </li>
      <li>
        <NavLink to="/register" onClick={() => setMenuOpen(false)}>Register</NavLink>
      </li>
    </>
  );

  const userLinks = (
    <>
      <li>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/pets-supplies" onClick={() => setMenuOpen(false)}>Pets & Supplies</NavLink>
      </li>
      <li>
        <NavLink to="/add-listing" onClick={() => setMenuOpen(false)}>Add Listing</NavLink>
      </li>
      <li>
        <NavLink to="/my-listings" onClick={() => setMenuOpen(false)}>My Listings</NavLink>
      </li>
      <li>
        <NavLink to="/my-orders" onClick={() => setMenuOpen(false)}>My Orders</NavLink>
      </li>
    </>
  );

  return (
    <nav className="bg-base-100  rounded-[50px] mx-auto my-4 px-4 py-2 flex items-center justify-between max-w-6xl relative shadow-lg hover:shadow-[0_8px_6px_var(--shadow-color)] transition duration-300 ease-in-out"
      style={{ color: "var(--color-text-primary)" }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="PawMart Logo" className="w-32 sm:w-40" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex menu menu-horizontal gap-5 text-primary font-medium">
        {user ? userLinks : guestLinks}
      </ul>

      {/* Right: Theme + Profile + Menu Button */}
      <div className="flex items-center gap-3">
        <ThemeController />

        {/* If logged in */}
        {user && (
          <div className="flex items-center gap-2">
            <div className="tooltip tooltip-bottom" data-tip={user.displayName || ""}>
              <img
                src={user.photoURL || "https://i.ibb.co/3W9yqVx/default-avatar.png"}
                alt="Profile"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-base-300"
              />
            </div>
            <button
              onClick={signOutUser}
              className="btn btn-sm btn-ghost hidden sm:inline-block"
              style={{ color: "var(--color-text-primary)" }}
            >
              Logout
            </button>
          </div>
        )}

        {/* Mobile menu toggle */}
        <button
          className="btn btn-primary btn-sm lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-full right-0 w-fit bg-base-100 rounded-box shadow-md mt-2 lg:hidden z-50 p-4 border border-base-300 text-center"  style={{ color: "var(--color-text-primary)" }}>
          <ul className="menu menu-vertical  gap-2">
            {user ? userLinks : guestLinks}
            {user && (
              <button
                onClick={() => {
                  signOutUser();
                  setMenuOpen(false);
                }}
                className="btn btn-sm btn-ghost text-error mt-2"
              >
                Logout
              </button>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

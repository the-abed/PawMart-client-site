import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/PawMart.png";
import ThemeController from "./ThemeController";
import { AuthContext } from "../../contexts/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  // Common links for everyone
  const commonLinks = (
    <>
      <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
      <li><NavLink to="/pets-supplies" onClick={() => setMenuOpen(false)}>Pets & Supplies</NavLink></li>
    </>
  );

  const guestLinks = (
    <>
      {commonLinks}
      <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
      <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
    </>
  );

  const userLinks = (
    <>
      {commonLinks}
      <li><NavLink to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</NavLink></li>
      <li><NavLink to="/add-listing" onClick={() => setMenuOpen(false)}>Add Listing</NavLink></li>
      <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
    </>
  );

  return (
    <nav className="bg-base-100 rounded-[50px] mx-auto my-4 px-4 py-2 flex items-center justify-between max-w-6xl relative shadow-lg hover:shadow-[0_8px_6px_var(--shadow-color)] transition duration-300 ease-in-out"
      style={{ color: "var(--color-text-primary)" }}
    >
      {/* Logo */}
      <Link to="/">
        <div className="flex items-center gap-2">
          <img src={logo} alt="PawMart Logo" className="w-32 sm:w-40" />
        </div>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex menu menu-horizontal gap-2 text-primary font-medium">
        {user ? userLinks : guestLinks}
      </ul>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        <ThemeController />

        {/* ADVANCED MENU: Profile Dropdown (Logged In) */}
        {user ? (
          <div className="dropdown dropdown-end z-50">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border border-base-300">
              <div className="w-10 rounded-full">
                <img 
                  alt="Profile" 
                  src={user.photoURL || "https://i.ibb.co/3W9yqVx/default-avatar.png"} 
                />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border border-base-300">
              <li className="px-4 py-2 font-bold text-primary border-b border-base-200">
                {user.displayName || "User"}
              </li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/profile">Edit Profile</Link></li>
              <li>
                <button onClick={signOutUser} className="text-error font-semibold">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/register" className="btn btn-primary btn-sm hidden sm:flex">Register</Link>
        )}

        {/* Mobile menu toggle (Hamburger) */}
        <button
          className="btn btn-primary btn-sm lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu (Toggle) */}
      {menuOpen && (
        <div className="absolute top-full right-0 w-64 bg-base-100 rounded-box shadow-2xl mt-4 lg:hidden z-50 p-4 border border-base-300">
          <ul className="menu menu-vertical gap-2">
            {user ? userLinks : guestLinks}
            {!user && <li><NavLink to="/register" onClick={() => setMenuOpen(false)}>Register</NavLink></li>}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
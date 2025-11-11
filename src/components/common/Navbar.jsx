import React from "react";
import { NavLink } from "react-router";
import logo from "../../assets/PawMart.png";
import ThemeController from "./ThemeController";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/pets-supplies">Pets & Supplies</NavLink>
      </li>
    </>
  );
  return (
  <div className="navbar bg-base-100 max-w-10/12 mx-auto my-5 rounded-[50px] text-primary shadow-[0_1px_2px_var(--shadow-color)] dark">
  <div className="navbar-start">
    <img className="w-32 mb-5 ml-10" src={logo} alt="PawMart Logo" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-4">{navLinks}</ul>
  </div>
  <div className="navbar-end">
    <div className="md:mr-5">
      <ThemeController />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
        {navLinks}
      </ul>
    </div>
  </div>
</div>

  );
};

export default Navbar;

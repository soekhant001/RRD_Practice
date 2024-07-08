import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between w-[60%] mx-auto mt-10">
      <NavLink to={"/"} className="text-2xl font-bold">
        Home
      </NavLink>
      <NavLink to={"/about"} className="text-2xl font-bold">
        About
      </NavLink>
      <NavLink to={"/products"} className="text-2xl font-bold">
        Product
      </NavLink>
    </div>
  );
};

export default Navbar;

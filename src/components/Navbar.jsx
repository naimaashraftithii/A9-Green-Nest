import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/logo1 (2).png";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-green-600">GreenNest</Link>

        <ul className="flex items-center gap-4">
          <li><NavLink to="/" className="hover:text-green-600">Home</NavLink></li>
          <li><NavLink to="/profile" className="hover:text-green-600">My Profile</NavLink></li>
        </ul>

        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="avatar" src={user.photoURL || "https://i.pravatar.cc/100?img=8"} />
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box `z-1` mt-3 w-52 p-2 shadow">
              <li className="px-2 py-1 text-sm">
                <span className="font-semibold">{user.displayName || "Anonymous"}</span>
                <span className="text-xs opacity-70">{user.email}</span>
              </li>
              <li><Link to="/profile">Profile</Link></li>
              <li><button onClick={logout}>Logout</button></li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link to="/login" className="btn btn-outline">Login</Link>
            <Link to="/signup" className="btn btn-success text-white">Register</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

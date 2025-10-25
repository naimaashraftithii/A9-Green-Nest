import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/logo1.png"; // ⚠️ rename to remove spaces
import { FaBars, FaTimes } from "react-icons/fa";

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm md:text-base transition-colors duration-200
   ${
     isActive
       ? "text-green-600 font-semibold"
       : "text-gray-400 hover:text-green-500"
   }`;

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-base-100/95 backdrop-blur border-b border-gray-200">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
         <Link to="/" className="flex items-center gap-2">
  <img
    src={logo}
    alt="GreenNest logo"
    className="h-9 w-auto drop-shadow-sm"
  />
  <span className="text-5xl font-extrabold tracking-tight text-green-500">
    <span className="inter_Lustria text-green-700 italic">Green</span>
    Nest
  </span>
</Link>


          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-4">
            <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/plants" className={navLinkClass}>Plants</NavLink></li>
            <li><NavLink to="/profile" className={navLinkClass}>My Profile</NavLink></li>
          </ul>

          {/* Right Controls */}
          <div className="hidden md:flex items-center gap-2">
            {user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full ring ring-green-400 ring-offset-2">
                    <img
                      alt="avatar"
                      src={user.photoURL || "https://i.pravatar.cc/100?img=8"}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-56 p-2 shadow"
                >
                  <li className="px-2 py-2">
                    <div className="text-sm leading-tight">
                      <div className="font-semibold">
                        {user.displayName || "Anonymous"}
                      </div>
                      <div className="opacity-70">{user.email}</div>
                    </div>
                  </li>
                  <li>
                    <Link to="/profile">Profile</Link>
                  </li>
                  <li>
                    <button onClick={logout}>Logout</button>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <Link to="/login" className="btn btn-ghost text-gray-500 hover:text-green-600">
                  Login
                </Link>
                <Link to="/signup" className="btn bg-green-600 hover:bg-green-700 text-white">
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 text-gray-500 hover:text-green-600 transition-colors"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle Menu"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Panel */}
        {open && (
          <div className="md:hidden pb-3 animate-in fade-in slide-in-from-top-2">
            <ul className="flex flex-col border-t pt-3 gap-1">
              <li>
                <NavLink to="/" className={navLinkClass} onClick={() => setOpen(false)}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/plants" className={navLinkClass} onClick={() => setOpen(false)}>
                  Plants
                </NavLink>
              </li>
              <li>
                <NavLink to="/profile" className={navLinkClass} onClick={() => setOpen(false)}>
                  My Profile
                </NavLink>
              </li>
            </ul>

            <div className="mt-3 flex items-center gap-2">
              {user ? (
                <>
                  <Link
                    to="/profile"
                    onClick={() => setOpen(false)}
                    className="btn btn-ghost flex-1 text-gray-500 hover:text-green-600"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={logout}
                    className="btn btn-outline flex-1 text-gray-500 hover:text-green-600"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setOpen(false)}
                    className="btn btn-ghost flex-1 text-gray-500 hover:text-green-600"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setOpen(false)}
                    className="btn bg-green-600 text-white hover:bg-green-700 flex-1"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

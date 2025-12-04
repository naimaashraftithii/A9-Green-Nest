import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/logo1.png";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const { user } = useContext(AuthContext);

  return (
    <footer className="mt-16 border-t border-gray-200 dark:border-slate-700 bg-base-100 dark:bg-slate-950 text-gray-800 dark:text-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-4">
        {/* Brand  */}
        <div className="md:col-span-2 space-y-3">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="GreenNest logo"
              className="h-7 w-auto sm:h-8 drop-shadow-sm"
            />
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-green-500 leading-none">
              <span className="inter_Lustria text-green-700 dark:text-green-300 italic">
                Green
              </span>
              <span className="ml-1 text-green-600 dark:text-green-200">Nest</span>
            </span>
          </Link>

          <p className="text-sm text-gray-200 dark:text-gray-300 max-w-md mt-2">
            Bringing a little piece of forest into every home. Plants, care
            tips, and green services for plant lovers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold  text-green-300 dark:text-gray-100 mb-3 uppercase tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className ="text-gray-200 hover:text-green-600 dark:hover:text-green-300">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/plants"
                className="text-gray-200 hover:text-green-600 dark:hover:text-green-300"
              >
                Plants
              </Link>
            </li>

            {/* Protected links*/}
            {user && (
              <>
                <li>
                  <Link
                    to="/profile"
                    className="text-gray-200 hover:text-green-600 dark:hover:text-green-300"
                  >
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-200 hover:text-green-600 dark:hover:text-green-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-200 hover:text-green-600 dark:hover:text-green-300"
                  >
                    Our Services
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-sm font-semibold text-green-300 dark:text-gray-100 mb-3 uppercase tracking-wide">
            Follow Us
          </h3>
          <p className="text-sm text-gray-200 dark:text-gray-300 mb-3">
            Stay connected with GreenNest on social media.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="h-9 w-9 rounded-full border  text-emerald-100 border-gray-300 dark:border-slate-600 flex items-center justify-center hover:bg-[#1877f2] hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="h-9 w-9 rounded-full border  text-emerald-100 border-gray-300 dark:border-slate-600 flex items-center justify-center hover:bg-[#0a66c2] hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="h-9 w-9 rounded-full border  text-emerald-100 border-gray-300 dark:border-slate-600 flex items-center justify-center hover:bg-gradient-to-tr hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
              className="h-9 w-9 rounded-full border border-gray-300 text-emerald-100 dark:border-slate-600 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 dark:border-slate-700 py-3 text-center text-xs text-gray-300 dark:text-gray-200">
        © {new Date().getFullYear()} GreenNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

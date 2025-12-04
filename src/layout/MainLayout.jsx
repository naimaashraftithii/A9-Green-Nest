import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
  
<div className="min-h-screen bg-white dark:bg-black 
                text-gray-300 dark:text-gray-400 
                transition-colors">

  <Navbar />
  <Outlet />
  <Footer />
</div>

  );
};

export default MainLayout;

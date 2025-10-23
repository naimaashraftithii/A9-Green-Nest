// src/layout/MainLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <div className="flex-1"><Outlet /></div>
    <Footer />
  </div>
);

export default MainLayout;

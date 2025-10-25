import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RenderErrorBoundary from "../components/RenderErrorBoundary";

const MainLayout = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      <RenderErrorBoundary>
        <Outlet />
      </RenderErrorBoundary>
    </main>
    <Footer />
  </div>
);

export default MainLayout;

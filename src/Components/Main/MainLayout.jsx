import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function MainLayout() {
  return (
    <div className="flex flex-col h-screen  max-w-7xl mx-auto">
      {/* navbar starts */}
      <div>
        <Navbar />
      </div>
      {/* Outlet starts */}
      <div className="flex-1  my-10">
        <Outlet />
      </div>

      {/* Footer Starts */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;

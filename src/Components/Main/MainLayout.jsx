import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function MainLayout() {
  return (
    <div className="flex flex-col h-screen">
      {/* navbar starts */}
      <div>
        <Navbar />
      </div>
      {/* Outlet starts */}
      <div className="flex-1  lg:max-w-[1400px] mx-auto">
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

import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function MainLayout() {
  return (
    <div className="flex flex-col h-screen ">
      {/* navbar starts */}
      <div>
        <Navbar />
      </div>
      {/* Outlet starts */}
      <div className="flex-1  ">
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

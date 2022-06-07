import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "components/global";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-100">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "MainLayout";
import Home from "pages/home";
import NotFound from "pages/not-found";
import Counter from "pages/counter";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="counter" element={<Counter />} />

          {/*======== 404 page ====== */}
          <Route path="*" element={<NotFound />} />
          {/* move it one level up if you don't want header footer for 404 page */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

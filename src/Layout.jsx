import { useState } from "react";
import { Outlet } from "react-router";
import Container from "./components/Container/Container.jsx";
import SiteHeader from "./components/SiteHeader/SiteHeader.jsx";
import { ToastContainer } from "react-toastify";
import SiteFooter from "./components/SiteFooter/SiteFooter.jsx";

function Layout() {
  return (
    <div className="page-wrapper">
      <SiteHeader />
      <Container>
        <Outlet />
      </Container>
      <SiteFooter />
      <ToastContainer />
    </div>
  );
}

export default Layout;

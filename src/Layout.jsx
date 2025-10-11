import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import Container from "./components/Container/Container.jsx";
import SiteHeader from "./components/SiteHeader/SiteHeader.jsx";
import { ToastContainer } from "react-toastify";
import SiteFooter from "./components/SiteFooter/SiteFooter.jsx";
import SiteOverlay from "./components/SiteOverlay/SiteOverlay.jsx";

function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <SiteOverlay />
      <div className="page-wrapper">
        <SiteHeader />
        <Container>
          <Outlet />
        </Container>
        <SiteFooter />
        <ToastContainer />
      </div>
    </>
  );
}

export default Layout;

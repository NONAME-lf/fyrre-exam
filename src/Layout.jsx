import { useState } from "react";
import { Outlet } from "react-router";
import Container from "./components/Container/Container.jsx";
import SiteHeader from "./components/SiteHeader/SiteHeader.jsx";
import { ToastContainer } from "react-toastify";

function Layout() {
  const [count, setCount] = useState(0);
  return (
    <div className="page-wrapper">
      <SiteHeader />
      <Container>
        <Outlet />
      </Container>
      <ToastContainer />
    </div>
  );
}

export default Layout;

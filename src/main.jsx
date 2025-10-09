import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router";
import Layout from "./Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import MagazinePage from "./pages/MagazinePage.jsx";
import DetailPage from "./pages/DetailPage.jsx";
import "./assets/style/style.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/magazine" element={<MagazinePage />} />
          <Route path="/detail/:type/:id" element={<DetailPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);

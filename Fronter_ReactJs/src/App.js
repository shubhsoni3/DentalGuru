import React from "react";
import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/style.scss";
import "./assets/css/materialdesignicons.min.css";
import IndexSaas from "./pages/index-saas";
import Error from "./pages/page-error";
import ContactOne from "./pages/page-contact-one";
import Refund from "./componants/footer/Refund.jsx";
import Privacy from "./componants/footer/Privacy.jsx";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<IndexSaas />} />
        <Route path="/page-error" element={<Error />} />
        <Route path="*" element={<Error />} />
        <Route path="/page-contact-one" element={<ContactOne />} />
        <Route path="/Refund" element={<Refund />} />
        <Route path="/Privacy" element={<Privacy />} />
      </Routes>
    </>
  );
}

export default App;

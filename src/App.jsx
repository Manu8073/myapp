import React from "react";
import Nav from "./components/navbar/Nav";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
//import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Nav></Nav>
      <div className="page-content">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

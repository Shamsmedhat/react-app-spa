import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

function Layout() {
  return (
    <>
      <Nav />
      <main>
        <Outlet></Outlet>
      </main>
      <Footer />
    </>
  );
}

export default Layout;

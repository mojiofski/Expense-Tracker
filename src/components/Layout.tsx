import React from "react";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <MobileMenu />
      {children}
    </div>
  );
};

export default Layout;

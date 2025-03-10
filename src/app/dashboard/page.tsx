import DashbordNavbar from "@/components/DashbordNavbar";
import MobileMenu from "@/components/MobileMenu";
import SlideMenu from "@/components/SlideMenu";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <DashbordNavbar />
      <MobileMenu />
      <SlideMenu />
    </div>
  );
};

export default Dashboard;

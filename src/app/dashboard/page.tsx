import DashboardScreen from "@/components/DashboardScreen";
import DashbordNavbar from "@/components/DashbordNavbar";
import MobileMenu from "@/components/MobileMenu";
import SlideMenu from "@/components/SlideMenu";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <DashbordNavbar />
      <MobileMenu />
      <div className="flex w-full lg:flex gap-2 p-2">
        <SlideMenu />
        <DashboardScreen />
      </div>
    </div>
  );
};

export default Dashboard;

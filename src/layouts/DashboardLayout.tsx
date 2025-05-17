import React from "react";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <>
      <div>DashboardLayout</div>
      <Outlet />
    </>
  );
}

export default DashboardLayout;

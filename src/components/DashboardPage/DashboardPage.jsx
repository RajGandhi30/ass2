import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import { Space } from "antd";

const DashboardPage = () => {
  // localStorage.setItem("user_role", "admin")
  // let user_role = localStorage.getItem("user_role")
  let user_role = "admi";

  return (
    <div className="flex flex-col w-[100vm] h-screen;">
      <Header />
      <Space className="flex flex-1 justify-start items-start">
        <Sidebar user_role={user_role} />
        <Hero user_role={user_role} />
      </Space>
    </div>
  );
};

export default DashboardPage;

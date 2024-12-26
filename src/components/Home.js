import React, { useState } from "react";
import Repositories from './Respositories';
import CodeReview from './CodeReview';
import CloudSecurity from './CloudSecurity';
import Setting from './Setting';
import SideBar from "./SideBar";
import HowToUse from "./HowToUse";
import MenuBar from "./MenuBar";

const Home = () => {
  const [activeTab, setActiveTab] = useState("repo");

  const renderActiveTab = () => {
    switch (activeTab) {
      case "review":
        return <CodeReview />;
      case "security":
        return <CloudSecurity />;
      case "use":
        return <HowToUse />;
      case "setting":
        return <Setting />;
      default:
        return <Repositories />;
    }
  };

  return (
    <>
      <div className="flex min-h-screen">
        <div className="hidden md:block">
          <SideBar setActiveTab={setActiveTab} />
        </div>
        <div className="flex-col w-full">
          <div className="block md:hidden">
            <MenuBar setActiveTab={setActiveTab} />
          </div>
          {renderActiveTab()}
        </div>
      </div>
    </>
  );
};

export default Home;
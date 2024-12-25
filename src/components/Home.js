import React, { useState } from "react";
import Repositories from './Respositories';
import CodeReview from './CodeReview';
import CloudSecurity from './CloudSecurity';
import Setting from './Setting';
import SideBar from "./SideBar";
import HowToUse from "./HowToUse";

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
        <SideBar setActiveTab={setActiveTab} />
        {renderActiveTab()}
      </div>
    </>
  );
};

export default Home;
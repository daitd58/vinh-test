import React, { useState } from "react";
import Tab1 from "./components/Tab1";
import Tab2 from "./components/Tab2";
import Tab3 from "./components/Tab3";
import "./App.css";

const App = () => {
  const [checkTab, setCheckTab] = useState("tab1");
  const handleClick = (e) => {
    setCheckTab(e.target.className);
  };

  return (
    <div className="app">
      <div className="tabs">
        <span
          onClick={handleClick}
          className="tab1"
          id={`${checkTab === "tab1" ? "active" : ""}`}
        >
          Tab1
        </span>
        <span
          onClick={handleClick}
          className="tab2"
          id={`${checkTab === "tab2" ? "active" : ""}`}
        >
          Tab2
        </span>
        <span
          onClick={handleClick}
          className="tab3"
          id={`${checkTab === "tab3" ? "active" : ""}`}
        >
          Tab3
        </span>
      </div>
      <div className="tab-content">
        <div className={`${checkTab === "tab1" ? "active " : ""}`}>
          <Tab1 />
        </div>
        <div className={`${checkTab === "tab2" ? "active " : ""}`}>
          <Tab2 className="tab-detail" />
        </div>
        <div className={`${checkTab === "tab3" ? "active " : ""}`}>
          <Tab3 />
        </div>
      </div>
    </div>
  );
};

export default App;

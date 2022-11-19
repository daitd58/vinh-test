import React, { useState } from "react";
import Tab1 from "./components/Tab1";
import Tab2 from "./components/Tab2";
import Tab3 from "./components/Tab3";
import "./App.css";
import Tab11 from "./components2/Tab11";
import Tab22 from "./components2/Tab22";
import Tab33 from "./components2/Tab33";
import Tab44 from "./components2/Tab44";
const App = () => {
  const [checkTab, setCheckTab] = useState("tab1");
  const handleClick = (e) => {
    setCheckTab(e.target.className);
  };
  const [checkStep, setCheckStep] = useState("step1");
  const handlePrevious = () => {
    const name = +checkStep.slice(4) - 1;
    setCheckStep(`step${name}`);
  };
  const handleNext = () => {
    const name = +checkStep.slice(4) + 1;
    setCheckStep(`step${name}`);
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

      <div className="step-components">
        <div className="steps">
          <div className={`${checkStep === "step1" ? "active " : ""}`}>
            <Tab11 />
          </div>
          <div className={`${checkStep === "step2" ? "active " : ""}`}>
            <Tab22 />
          </div>
          <div className={`${checkStep === "step3" ? "active " : ""}`}>
            <Tab33 />
          </div>
          <div className={`${checkStep === "step4" ? "active " : ""}`}>
            <Tab44 />
          </div>
        </div>
        <div className="button-click">
          {checkStep === "step1" ? (
            " "
          ) : (
            <span onClick={handlePrevious} className="button-step">
              Previous
            </span>
          )}
          {checkStep === "step4" ? (
            " "
          ) : (
            <span className="button-step" onClick={handleNext}>
              Next
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;

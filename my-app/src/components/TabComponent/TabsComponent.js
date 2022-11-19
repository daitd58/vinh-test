import React, { useState } from "react";
import "./style.css";

const listHeader = [
  "Overview",
  "Anoucement",
  "Course content",
  "Bookmark",
  "Q&A",
  "Grade",
];

function TabsComponent() {
  const [tab, setTab] = useState();
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        border: "2px solid #000",
        marginTop: "10px",
      }}
    >
      <div>
        {listHeader.map((item, index) => (
          <button key={index}>{item}</button>
        ))}
      </div>
      <div
        className="section"
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div
          className="left"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            className="section1"
            style={{ border: "1px solid #000", width: "100%", height: "50%" }}
          >
            Awarded by
          </div>
          <div
            className="section2"
            style={{ border: "1px solid #000", width: "100%", height: "50%" }}
          >
            Course Instructor
          </div>
        </div>
        <div
          className="section3"
          style={{ border: "1px solid #000", width: "50%", height: "50%" }}
        >
          <div>Institution</div>
          <div>Subject</div>
          <div>Level: Basic</div>
          <div>Video Transcript: English</div>
        </div>
      </div>
    </div>
  );
}

export default TabsComponent;

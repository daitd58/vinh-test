import React from "react";
import Tabs from "./components/Tabs";
import "./App.css";

function App() {
  return (
    <div>
      <Tabs>
        <div label="Overview">NCC1</div>
        <div label="Annoucement">NCC2</div>
        <div label="Course cotent">NCC3</div>
        <div label="Bookmark">NCC4</div>
        <div label="Q&A">NCC5</div>
        <div label="Grade">NCC6</div>
      </Tabs>
    </div>
  );
}

export default App;

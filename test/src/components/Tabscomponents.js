import React from "react";
import "./tabcss.css";
import { BsBank2 } from "react-icons/bs";

function Tabscomponents() {
  return (
    <div id="App">
      <div className="header">
        <div className="container">
          <ul>
            <div className="bt-menu">
              <li>
                <a href="">Overview</a>
              </li>
            </div>
            <div className="bt-menu">
              <li>
                <a href="">Annoucement</a>
              </li>
            </div>
            <div className="bt-menu">
              <li>
                <a href="">Coure content</a>
              </li>
            </div>
            <div className="bt-menu">
              <li>
                <a href="">Book mark</a>
              </li>
            </div>
            <div className="bt-menu">
              <li>
                <a href="">Q & A</a>
              </li>
            </div>
            <div className="bt-menu">
              <li>
                <a href="">Grade</a>
              </li>
            </div>
          </ul>
        </div>
        <div className="box">
          <div className="box-left">
            <h1>Awarded</h1>
            <img src="https://static.ybox.vn/2019/11/4/1573729388060-imgpsh_fullsize_anim.png" />
          </div>
          <div className="box-right">
            <div>
              <BsBank2 /> Intitution:
            </div>
            <div>
              <BsBank2 /> Subject
            </div>
            <div>
              <BsBank2 /> level basic
            </div>
            <div>
              <BsBank2 /> Video Transcript: English
            </div>
          </div>
        </div>
        <div className="box-box">
          <div className="box-b">
            <h1>Coure Instructor</h1>
            <img src="" />
            <p>Van Nguyen Hong</p>
            <p>Van.nguyenhong@ncc.asia</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabscomponents;

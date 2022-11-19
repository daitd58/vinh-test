import React from "react";
import "./stepcss.css";

function Stepscomponents() {
  return (
    <div id="Apps">
      <div className="header">
        <div className="box-time">
          <b>Time remaining : 00:26:35</b>
        </div>
        <div className="box-title">
          <b>Lưu ý: Hãy save từng câu sau khi trả lời</b>
        </div>
      </div>
      <div className="box-item">
        <ul>
          <li>
            <a href="">Question 1</a>
          </li>
          <li>
            <a href="">Question 2</a>
          </li>
          <li>
            <a href="">Question 3</a>
          </li>
          <li>
            <a href="">Question 4</a>
          </li>
          <li>
            <a href="">Question 5</a>
          </li>
          <li>
            <a href="">Question 6</a>
          </li>
          <li>
            <a href="">Question 7</a>
          </li>
          <li>
            <a href="">Question 8</a>
          </li>
          <li>
            <a href="">Question 9</a>
          </li>
          <li>
            <a href="">Question 10</a>
          </li>
        </ul>
      </div>
      <div className="box-h">
        <h5>2. Which value will be printed in console (0.25pts)</h5>
        <p>function input</p>
      </div>
      <div className="check">
        <input type="radio" /> A
        <input type="radio" /> B
        <input type="radio" /> C
        <input type="radio" /> D
      </div>
      <div>
        <button>Previus</button>
        <button>Next</button>
        <button>Finish Test</button>
      </div>
    </div>
  );
}

export default Stepscomponents;

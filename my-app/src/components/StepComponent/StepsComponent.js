import React from "react";

function StepsComponent() {
  const title = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div style={{ marginTop: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>Time remaining: 00:26:35</div>
        <text style={{ color: "red" }}>Luu y: </text>
      </div>
      <div style={{ border: "1px solid #000" }}>
        {title.map((i) => (
          <button>Question {i} </button>
        ))}
      </div>
      <div>
        Question 1
      </div>
    </div>
  );
}

export default StepsComponent;

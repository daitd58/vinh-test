import "./style.css";

function App() {
  const arry = [
    " Question1",
    " Question1",
    " Question1",
    " Question1",
    " Question1",
    " Question1",
    " Question1",
    " Question1",
    " Question1",
    " Question1",
    " Question1",
    "Question1",
  ];
  return (
    <div className="App">
      <div className="header">
        <p>Time remaining: 00:26:35 </p>
        <p style={{ color: "red" }}>luu y: Hay save cac cau khi tra loi</p>
      </div>

      <div className="container">
        {arry.map((i, index) => (
          <span
            id={index}
            style={{
              margin: 50,
              marginTop: 10,
            }}
          >
            {i}
          </span>
        ))}
      </div>

      <div className="a">
        <h4 style={{ marginLeft: "30px" }}>2. Which value will be print</h4>
      </div>
    </div>
  );
}
export default App;

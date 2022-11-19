import "./App.css";
import NextStep from "./components/NextStep/NextStep";
import Tab from "./components/Tab/Tab";

function App() {
  const tab = ["tuan", "tuan1", "tuan12"];
  const step = 5;
  const stepContent = Array.from(Array(step).keys());

  return (
    <div className="App">
      <div className="block">
        <Tab>
          {tab.map((item, index) => (
            <div key={index} title={item} className="content">
              {item}
            </div>
          ))}
        </Tab>
      </div>
      <hr></hr>

      <div>
        <NextStep step={step}>
          {stepContent.map((item, index) => (
            <div key={index} title={item} className="content">
              {item + 1}
            </div>
          ))}
        </NextStep>
      </div>
    </div>
  );
}

export default App;

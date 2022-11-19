import "./App.css";
import TabsComponent from "./components/TabComponent/TabsComponent";
import StepsComponent from "./components/StepComponent/StepsComponent";
import congSoDangString from "./components/utils/congSoDangString"
import flatArr from "./components/utils/flatArr";
function App() {
  return (
    <>
      <TabsComponent />
      <StepsComponent />
      
      <>Giai thuat cau 2: {congSoDangString("123", "123")}</>
      <>Giai thuat cau 3: {flatArr([1,2,3,[4,5,[6]]], 2)}</>
    </>
    
  );
}

export default App;

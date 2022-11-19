import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import TabComponent from './TabsComponent/TabsComponent';
import StepsComponent from './StepsComponent/StepsComponent'
import Layout from './layout/layout'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />} exact>
          <Route path='/overview' element={<TabComponent />}></Route>
          <Route path='/stepcomponent' element={<StepsComponent />}>
            <Route path='/stepcomponent/q1' element={<div>1</div>}></Route>
            <Route path='/stepcomponent/q2' element={<div>2</div>}></Route>
            <Route path='/stepcomponent/q3' element={<div>3</div>}></Route>
            <Route path='/stepcomponent/q4' element={<div>4</div>}></Route>
            <Route path='/stepcomponent/q5' element={<div>5</div>}></Route>
            <Route path='/stepcomponent/q6' element={<div>6</div>}></Route>
            <Route path='/stepcomponent/q7' element={<div>7</div>}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

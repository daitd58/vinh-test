import logo from './logo.svg';
import Overview from './components/Overview';
import Course from './components/Course';
import Bookmark from './components/Bookmark';
import Annoucement from './components/Annoucement';
import Qa from './components/Qa';
import Grade from './components/Grade';
import './App.css';
import * as React from 'react'

function App() {
  const [showO, setShowO] = React.useState(false)
  const [showA, setShowA] = React.useState(false)
  const [showC, setShowC] = React.useState(false)
  const [showB, setShowB] = React.useState(false)
  const [showQ, setShowQ] = React.useState(false)
  const [showG, setShowG] = React.useState(false)
  const handleShowO = () => {
    setShowO(true);
    if(showA || showB || showC || showQ || showG){
      setShowA(false);
      setShowB(false);
      setShowC(false);
      setShowQ(false);
      setShowG(false);
    }
  }
  const handleShowA = () => {
    setShowA(true);
    if(showO || showB || showC || showQ || showG){
      setShowO(false);
      setShowB(false);
      setShowC(false);
      setShowQ(false);
      setShowG(false);
    }
  }
  const handleShowC = () => {
    setShowC(true);
    if(showO || showB || showA || showQ || showG){
      setShowO(false);
      setShowB(false);
      setShowA(false);
      setShowQ(false);
      setShowG(false);
    }
  }
  const handleShowB = () => {
    setShowB(true);
    if(showO || showA || showC || showQ || showG){
      setShowO(false);
      setShowA(false);
      setShowC(false);
      setShowQ(false);
      setShowG(false);
    }
  }
  const handleShowQ = () => {
    setShowQ(true);
    if(showO || showB || showC || showA || showG){
      setShowO(false);
      setShowB(false);
      setShowC(false);
      setShowA(false);
      setShowG(false);
    }
  }
  const handleShowG = () => {
    setShowG(true);
    if(showO || showB || showC || showQ || showA){
      setShowO(false);
      setShowB(false);
      setShowC(false);
      setShowQ(false);
      setShowA(false);
    }
  }
  return (
    <div className="App">
        <div className="nav-bar">
          <button onClick={handleShowO}>Overview</button>
          <button onClick={handleShowA}>Annoucement</button>
          <button onClick={handleShowB}>Bookmark</button>
          <button onClick={handleShowC}>Course content</button>
          <button onClick={handleShowQ}>Q&A</button>
          <button onClick={handleShowG}>Grade</button>
        </div>
        <div className="main">
          <Overview showO={showO}/>
          <Annoucement showA={showA}/>
          <Course showC={showC}/>
          <Bookmark showB={showB}/>
          <Qa showQ={showQ}/>
          <Grade showG={showG}/>
        </div>
    </div>
  );
}

export default App;

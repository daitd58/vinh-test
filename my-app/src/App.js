

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Overview from './component/Overview';
import Bookmark from './component/Bookmark';
import Annoucement from './component/Annoucement';
import Coursecontent from './component/Coursecontent';
import  Grade from './component/Grade';
import Question from './component/Question';
import Navbar from './Navbar/Navbar';
function App() {
  return (
    <div classname = "App">
      <div>
        <h1>Test</h1>
        <Navbar/>
        
      </div>
      <Router>
        <Routes>
          <Route path="/" element= {<Overview/>} />
          <Route path="/Bookmark" element= {<Bookmark/>} />
          <Route path="/Annoucement" element= {<Annoucement/>} />
          <Route path="/Course" element= {<Coursecontent/>} />
          <Route path="/Grade" element= {<Grade/>} />        
          <Route path="/Question" element= {<Question/>} />    
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;

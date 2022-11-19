import { Routes, Route } from 'react-router-dom';
import Annoucement  from './component/Annoucement'
import Overview from './component/Overview'
import Cousre from './component/Cousre content'
import './App.css';


function App() {
  return (
    <div className='app'>
      <nav>
      <ul>
        <li><a href="/Overview">Overview</a></li>
        <li><a href="/Annoucement">Annoucement</a></li>
        <li><a href="/Cousre">Cousre content</a></li>
        <li><a href="/">Bookmark</a></li>
        <li><a href="/">Q&A</a></li>
        <li><a href="/">Grade</a></li>   
    </ul>
      </nav>
    <hr/>
    <Routes>
      <Route path="/Overview" element={<Overview/>}></Route>
      <Route path="/Annoucement" element={<Annoucement/>}></Route>
      <Route path="/Cousre" element={<Cousre/>}></Route>
    </Routes>
    </div>
            
    
    


  )
}

export default App;

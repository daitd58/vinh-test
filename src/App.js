
import './App.css';
import { BrowserRouter as Router, Routes,Route ,Link} from 'react-router-dom';
import Home from './Component/Pages/Home';
import Task from './Component/Pages/Task';
import Layout from './Component/Pages/Gade';
function App() {
  return (
    <Router>
        <div className="App">
          
             <ul style={{display:"flex",justifyContent:"center" }}>
                <li ><Link to="/Layout">Ove</Link></li>
                <li style={{marginLeft:"20px",marginRight:"20px"}}><Link to="/Home">Home</Link></li>
                <li><Link to="/Task">new</Link></li>
             </ul>
            
        </div>

        <Routes>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Task' element={<Task/>}/>
            <Route path='/Layout' element={<Layout/>}/>
        </Routes>
    </Router>
  );
}

export default App;

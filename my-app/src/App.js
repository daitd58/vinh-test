import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import './index.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Overview from './pages/Overview';
import QuestionPage from './pages/QuestionPage';
function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path='/' element={<Overview />} />
          <Route path='/overview' element={<Overview />} />

          <Route path='/question' element={<QuestionPage />} />

        </Routes>
      </div>

    </Router>

  );
}

export default App;

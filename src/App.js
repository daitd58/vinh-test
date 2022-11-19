import logo from './logo.svg';
import './App.css';
import Header from './components/about/About';
import Logo from './components/product/logo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home/Home';
import About from './components/about/About';
import Product from './components/product/Product';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Product" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

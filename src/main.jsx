import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './components/About';
import Footer from './components/Footer';
import Info from './components/Info';
import Interests from './components/Interests';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="container">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  </React.StrictMode>
);

import './App.css';
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import React from "react";
import Quran from './Quran';
import Hadith from './Hadith';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Home' element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='Contact' element={<Contact />} />
        <Route path='Quran' element={<Quran/>} />
        <Route path='Hadith' element={<Hadith />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}
export default App;

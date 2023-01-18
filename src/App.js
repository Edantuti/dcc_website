import './App.css';
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import { Teams } from './pages/Teams/Teams';
import { Events } from './pages/Events/Events';
import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import { Home } from './pages/Home/Home';
import { Error } from './pages/404Error/404Error';
import { useState } from 'react';

function App() {

  const [page, setPage] = useState('home')

  return (
    <BrowserRouter>
      <Navbar page={page} setPage={setPage} />
      <Routes>
        <Route path="/" element={<Home page={page} setPage={setPage} />} />
        <Route path="/home" element={<Home page={page} setPage={setPage} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path='/about-us' element={<Teams page={page} setPage={setPage} />} />
        <Route path='/events' element={<Events page={page} setPage={setPage} />} />
        <Route path="/events/hack-nita" element={<h1>Hackathon</h1>} />
        <Route path="/events/tgoc" element={<h1>Hackathon1</h1>} />
        <Route path="/events/ctf" element={<h1>Hackathon2</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

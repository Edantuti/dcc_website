import './App.css';
import { BrowserRouter, Route, Navigate, Routes, Link } from "react-router-dom";
import { Teams } from './pages/Teams/Teams';
import { Events } from './pages/Events/Events';
import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
import { Home } from './pages/Home/Home';
import { Error } from './pages/404Error/404Error';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
        <Route path='/teams' element={<Teams />} />
        <Route path='/events' element={<Events />} />
        <Route path='/not-found' element={<Error />} />
        <Route path="/events/hack-nita" element={<h1>Hackathon</h1>} />
        <Route path="/events/tgoc" element={<h1>Hackathon1</h1>} />
        <Route path="/events/ctf" element={<h1>Hackathon2</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

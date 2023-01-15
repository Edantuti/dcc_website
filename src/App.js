import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import { ComingSoon } from './pages/ComingSoon/ComingSoon';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComingSoon />} />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

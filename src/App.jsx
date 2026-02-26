import { BrowserRouter, Routes, Route } from 'react';
import Home from '../pages/home';
import Favorites from '../pages/favorites';
import Navbar from '../components/navbar';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

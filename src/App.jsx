import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Favorites from './pages/favorites';
import Navbar from './components/navbar';
import "../src/styles.css"

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      </div>
  );
}


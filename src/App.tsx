import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/NavBar';
import HeroSection from './features/home'; 
import MovieDetailPage from './pages/MovieDetailPage';
import Search from './pages/Search'; 
import './index.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
        <Route path="/search" element={<Search />} />  {/* ← NEW */}
      </Routes>
    </>
  );
}

export default App;
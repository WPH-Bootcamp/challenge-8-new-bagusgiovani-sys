import { useState } from 'react';
import Navbar from './components/layout/NavBar';
import HeroSection from './features/home'; 
import MovieDetailPage from './pages/MovieDetailPage';
import './index.css';


function App() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
    </>
  );
}

export default App;
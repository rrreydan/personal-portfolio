import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App: FC = () => {
  // Parallax effect for hero bg
  function parallax(e: React.MouseEvent<HTMLDivElement>) {
    const hero = document.getElementById('parallax');
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let x = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;

    if (hero !== null) {
      hero.style.backgroundPosition = x;
    }
  }

  return (
    <BrowserRouter>
      <div className="bg-primary w-full overflow-hidden" onMouseMove={parallax}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

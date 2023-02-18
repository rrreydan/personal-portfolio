import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import { FC, useRef, useState } from 'react';
import AboutMe from '../components/AboutMe';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Skills from '../components/Skills';

const Home: FC = () => {
  const parallax = useRef<IParallax>(null!);
  const [sidebarToggle, setSidebarToggle] = useState<boolean>(true);

  const getSidebarToggle = (toggle: boolean) => {
    setSidebarToggle(toggle);
    const parallaxDiv = document.getElementById('parallax');
    parallaxDiv?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Parallax
      ref={parallax}
      id="parallax"
      pages={4}
      style={{
        background: '#0d0d0d',
        overflow: `${!sidebarToggle ? 'hidden' : 'hidden scroll'}`
      }}
    >
      <ParallaxLayer
        offset={0}
        factor={1}
        speed={1}
        style={{
          height: '96px',
          zIndex: '10'
        }}
      >
        <Navbar getSidebarToggle={getSidebarToggle} />
      </ParallaxLayer>

      <ParallaxLayer
        offset={0}
        speed={0.5}
        factor={1}
        onClick={() => parallax.current.scrollTo(0.42)}
      >
        <Hero />
      </ParallaxLayer>

      <ParallaxLayer
        className="flex items-center justify-center"
        offset={0.999}
        speed={1.7}
        factor={1.3}
        style={{
          background: '#100f26'
        }}
        onClick={() => parallax.current.scrollTo(0.99)}
      >
        <AboutMe />
      </ParallaxLayer>

      <ParallaxLayer
        className="flex items-center justify-center"
        offset={0.99}
        factor={1.9}
        speed={0.5}
        style={{
          background: '#0d0d0d',
          zIndex: '-1'
        }}
        onClick={() => parallax.current.scrollTo(0)}
      >
        <Skills />
      </ParallaxLayer>
    </Parallax>
  );
};

export default Home;

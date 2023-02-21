import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import { FC, useRef, useState } from 'react';
import AboutMe from '../components/AboutMe';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Skills from '../components/Skills';

const Home: FC = () => {
  const parallax = useRef<IParallax>(null!);
  const [sidebarToggle, setSidebarToggle] = useState<boolean>(true);
  const screenHeight = window.screen.height;

  const getSidebarToggle = (toggle: boolean) => {
    setSidebarToggle(toggle);
    const parallaxDiv = document.getElementById('parallax');
    parallaxDiv?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Parallax
      ref={parallax}
      id="parallax"
      pages={screenHeight > 750 ? 1.8 : 1.95}
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

      <ParallaxLayer offset={0} speed={0.5} factor={1}>
        <Hero />
      </ParallaxLayer>

      <ParallaxLayer
        className="flex items-center justify-center rounded-[40px] shadow-[0_0_20px_5px] lg:shadow-[0_0_30px_5px] lg:shadow-secondary/10 shadow-secondary/10"
        offset={0.999}
        speed={2}
        factor={1.3}
        style={{
          background: '#18163b'
        }}
      >
        <AboutMe />
      </ParallaxLayer>

      <ParallaxLayer
        className="flex flex-col md:gap-7 gap-1 items-center justify-center"
        offset={0.99}
        factor={1.9}
        speed={0.5}
        style={{
          background: '#0d0d0d',
          zIndex: '-1',
          maxHeight: '1100px'
        }}
      >
        <Skills />
      </ParallaxLayer>
    </Parallax>
  );
};

export default Home;

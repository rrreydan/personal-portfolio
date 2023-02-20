import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import { FC, useRef, useState } from 'react';
import AboutMe from '../components/AboutMe';
import Hero from '../components/Hero';
import MyLinks from '../components/MyLinks';
import Navbar from '../components/Navbar';
import Skills from '../components/Skills';
import styles from '../style';

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
      pages={2.3}
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
        className="flex items-center justify-center rounded-[40px] shadow-[0_0_20px_5px] lg:shadow-[0_0_30px_5px] lg:shadow-secondary/10 shadow-secondary/10"
        offset={0.999}
        speed={1.7}
        factor={1.3}
        style={{
          background: '#100f26'
        }}
        onClick={() => parallax.current.scrollTo(0.94)}
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
        onClick={() => parallax.current.scrollTo(1.3)}
      >
        <Skills />
      </ParallaxLayer>

      <ParallaxLayer
        className="flex flex-col items-center m-h-[350px] justify-start rounded-t-[40px] shadow-[0_0_20px_5px] lg:shadow-[0_0_30px_5px] lg:shadow-secondary/10 shadow-secondary/10"
        offset={1.85}
        speed={1.2}
        style={{
          background: '#100f26',
          maxWidth: '1000px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        <MyLinks />
        <h1
          className={`${styles.paddingX} ${styles.flexCenter} w-full text-secondary mt-[115px] font-inter font-semibold xl:text-[72px] lg:text-[62px] text-[40px]`}
        >
          There's nothing else here :(
        </h1>
      </ParallaxLayer>
    </Parallax>
  );
};

export default Home;

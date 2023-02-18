import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { FC } from 'react';
import AboutMe from '../components/AboutMe';
import Hero from '../components/Hero';
import Skills from '../components/Skills';

const Home: FC = () => {
  return (
    <div>
      <Parallax pages={2} style={{ background: '#0d0d0d' }}>
        <ParallaxLayer offset={0} speed={0.5} factor={2}>
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
        >
          <AboutMe />
        </ParallaxLayer>

        <ParallaxLayer
          className="flex items-center justify-center"
          offset={0.9}
          factor={2}
          speed={0.5}
          style={{
            background: '#0d0d0d',
            zIndex: '-1'
          }}
        >
          <Skills />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Home;

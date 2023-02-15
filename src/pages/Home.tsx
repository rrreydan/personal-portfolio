import { FC } from 'react';
import AboutMe from '../components/AboutMe';
import Hero from '../components/Hero';

const Home: FC = () => {
  return (
    <div>
      <Hero />
      <AboutMe />
    </div>
  );
};

export default Home;

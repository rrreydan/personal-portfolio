import { FC, useRef } from 'react';
import styles from '../style';

import exampleAvatar from '../assets/img/example_avatar.jpg';
import useVisibility from '../hooks/useVisibility';
import Button from './Button';

const AboutMe: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useVisibility(ref);

  return (
    <div className={`${styles.paddingX} ${styles.flexCenter} w-full`}>
      <div className={`${styles.boxWidth}`}>
        <section className="lg:py-28 py-12">
          <div
            className={`flex xl:flex-row items-center flex-col gap-5 lg:gap-7 justify-between opacity-0 ${
              isVisible ? 'appearance' : ''
            }`}
            ref={ref}
          >
            <div className="flex items-center justify-center">
              <img
                className="h-[150px] w-[150px] lg:h-[250px] lg:w-[250px] xl:h-[400px] xl:w-[400px] rounded-full shadow-[0_0_35px_5px] lg:shadow-[0_0_70px_5px] lg:shadow-secondary/30 shadow-secondary/30 hover:shadow-secondary/40 transition-shadow absolute"
                src={exampleAvatar}
                alt="Avatar"
              />

              <div className="h-[225px] w-[225px] lg:h-[350px] lg:w-[350px] xl:h-[525px] xl:w-[525px] orbit">
                <div className="orbiter bg-white/80 h-[15px] w-[15px] xl:top-[-17px] lg:top-[10px] top-[-5px] xl:left-[240px] left-[80px] lg:h-[20px] lg:w-[20px] xl:h-[30px] xl:w-[30px] shadow-[0_0_15px_10px] lg:shadow-[0_0_30px_20px] lg:shadow-secondary/60 shadow-secondary/60 hover:shadow-secondary/70 transition-shadow"></div>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-5 lg:gap-7">
              <h1 className="flex-1 font-inter font-semibold xl:text-[72px] lg:text-[62px] text-[40px] text-white">
                About <span className="text-gradient">me</span>
              </h1>
              <div className="flex-1 font-inter xl:text-[24px] lg:text-[19px] text-[14px] text-secondary w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                facere. Facere exercitationem mollitia, sapiente beatae quas
                expedita vero dolorum est quam voluptate soluta qui eaque
                debitis accusamus. Voluptates, deserunt labore? Aut, illum
                expedita! Dolore sunt dolorem excepturi molestiae minus soluta
                ab, ad quis commodi magnam vel illum veniam maxime itaque quos
                cupiditate voluptatem molestias et labore laudantium fugiat,
                tempora voluptates.
              </div>
              <Button title="My projects" href="/projects" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;

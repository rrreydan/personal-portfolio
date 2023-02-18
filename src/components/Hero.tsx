import { FC } from 'react';
import styles from '../style';
import CodeBlock from './CodeBlock';

const Hero: FC = () => {
  return (
    <div
      className={`hero bg-primary min-h-screen ${styles.flexStart} items-center`}
      id="parallax"
    >
      <div className={`${styles.boxWidth}`}>
        <div
          className={`flex-1 ${styles.flexStart} w-full items-center flex-col xl:px-0 sm:px-16 px-6`}
        >
          <section
            className={`flex xl:flex-row flex-col w-full gap-3 lg:gap-7 lg:py-28 py-12`}
          >
            <div className="flex flex-row justify-between items-center w-full drop-shadow-lg lg:drop-shadow-2lg">
              <h1 className="flex-1 font-inter font-semibold xl:text-[72px] lg:text-[62px] text-[40px] xl:leading-[75px] lg:leading-[70px] leading-[40px] text-white">
                Hi, my name is
                <br className="lg:block hidden" />{' '}
                <span className="text-gradient">Andrey</span>
                <br />{' '}
                <div className="mt-3 lg:mt-7 xl:text-[52px] lg:text-[42px] text-[20px] text-secondary">
                  a frontend developer <br className="lg:block hidden" />
                  with passion for learning and creating.
                </div>
              </h1>
            </div>
            <CodeBlock />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;

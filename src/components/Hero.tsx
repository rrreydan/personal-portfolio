import { FC } from 'react';
import styles from '../style';
import CodeBlock from './CodeBlock';

// TODO: Add more elements to the background
const Hero: FC = () => {
  return (
    <div className={`hero bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          <section
            className={`flex xl:flex-row flex-col gap-3 sm:gap-7 sm:py-28 py-12`}
          >
            <div className="flex flex-row justify-between items-center w-full">
              <h1 className="flex-1 font-inter font-semibold sm:text-[72px] text-[40px] sm:leading-[75px] leading-[40px] text-white">
                Hi, my name is
                <br className="sm:block hidden" />{' '}
                <span className="text-gradient">Andrey</span>
                <br />{' '}
                <div className="mt-3 sm:mt-7 sm:text-[52px] text-[20px] text-secondary">
                  a frontend developer <br className="sm:block hidden" />
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

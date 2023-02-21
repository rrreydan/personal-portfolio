import { FC } from 'react';
import styles from '../style';
import CodeBlock from './CodeBlock';

const Hero: FC = () => {
  return (
    <div
      className={`bg-[url('./src/assets/img/bg.svg')] bg-cover bg-top min-h-screen ${styles.flexStart} items-center`}
    >
      <div className={`${styles.boxWidth}`}>
        <div
          className={`flex-1 ${styles.flexStart} w-full items-center flex-col xl:px-0 sm:px-16 px-6`}
        >
          <section
            className={`flex xl:flex-row flex-col w-full gap-3 md:gap-7 lg:py-28 py-12`}
          >
            <div className="flex flex-row justify-between items-center w-full drop-shadow-lg lg:drop-shadow-2lg">
              <h1 className="flex-1 font-inter font-semibold xl:text-[72px] md:text-[62px] text-[40px] xl:leading-[75px] md:leading-[70px] leading-[40px] text-white">
                Hi, my name is
                <br className="lg:block hidden" />{' '}
                <span className="text-gradient">Andrey</span>
                <br />{' '}
                <div className="mt-3 md:mt-7 xl:text-[52px] md:text-[42px] text-[20px] font-medium">
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

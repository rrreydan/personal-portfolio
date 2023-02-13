import { FC } from 'react';
import styles from '../style';

const Hero: FC = () => {
  return (
    <div className={`hero bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className="flex flex-row justify-between items-center w-full drop-shadow-2xl text-white">
              <h1 className="flex-1 font-inter font-semibold sm:text-[72px] text-[52px] sm:leading-[75px] leading-[50px]">
                Hi, my name is
                <br className="sm:block hidden" />{' '}
                <span className="text-gradient">Andrey</span>
                <br />{' '}
                <div className="mt-3 sm:mt-5">
                  <div className="sm:text-[52px] text-[32px]">
                    a frontend developer <br className="sm:block hidden" />
                    with passion for learning and creating.
                  </div>
                </div>
              </h1>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;

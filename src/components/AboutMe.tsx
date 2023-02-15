import { FC } from 'react';
import styles from '../style';

import exampleAvatar from '../assets/img/example_avatar.jpg';

// TODO: make the animation start after the element appears on the screen
const AboutMe: FC = () => {
  return (
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <section
          className={`flex xl:flex-row items-center flex-col gap-5 sm:gap-7 sm:py-28 py-12 justify-between`}
        >
          <div className="flex items-center justify-center">
            <img
              className="h-[200px] w-[200px] sm:h-[400px] sm:w-[400px] rounded-full shadow-[0_0_35px_5px] sm:shadow-[0_0_70px_5px] sm:shadow-secondary/30 shadow-secondary/30 hover:shadow-secondary/40 transition-shadow avatar absolute"
              src={exampleAvatar}
              alt="Avatar"
            />

            <div className="h-[275px] w-[275px] sm:h-[525px] sm:w-[525px] orbit">
              <div className="orbiter bg-white/80 h-[15px] w-[15px] sm:top-[-17px] top-0 sm:left-[240px] left-[80px] sm:h-[30px] sm:w-[30px] shadow-[0_0_15px_10px] sm:shadow-[0_0_30px_20px] sm:shadow-secondary/60 shadow-secondary/60 hover:shadow-secondary/70 transition-shadow"></div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-5 sm:gap-7 bio">
            <h1 className="flex-1 font-inter font-semibold sm:text-[72px] text-[40px] text-white">
              About <span className="text-gradient">me</span>
            </h1>
            <div className="flex-1 font-inter sm:text-[24px] text-[14px] text-secondary max-w-[700px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              facere. Facere exercitationem mollitia, sapiente beatae quas
              expedita vero dolorum est quam voluptate soluta qui eaque debitis
              accusamus. Voluptates, deserunt labore? Aut, illum expedita!
              Dolore sunt dolorem excepturi molestiae minus soluta ab, ad quis
              commodi magnam vel illum veniam maxime itaque quos cupiditate
              voluptatem molestias et labore laudantium fugiat, tempora
              voluptates.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;

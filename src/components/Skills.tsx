import { FC } from 'react';
import { skills } from '../constants';
import styles from '../style';
import Skillbar from './Skillbar';

const Skills: FC = () => {
  return (
    <div className={`${styles.paddingX} ${styles.flexCenter} w-full`}>
      <div className={`${styles.boxWidth}`}>
        <section className="flex items-center sm:items-start flex-col gap-7 text-white font-inter lg:py-28 py-12 w-full">
          <h1 className="flex-1 self-start font-inter font-semibold xl:text-[72px] lg:text-[62px] text-[40px] text-white">
            My <span className="text-gradient">skills</span>
          </h1>
          <div className="grid grid-cols-1 w-full sm:grid-cols-2 gap-y-7 gap-x-20 lg:gap-x-40 xl:gap-x-72">
            {skills.map(skill => (
              <Skillbar
                key={skill.id}
                title={skill.title}
                percents={skill.percents}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;

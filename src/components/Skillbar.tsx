import { FC, useRef } from 'react';
import useVisibility from '../hooks/useVisibility';

interface SkillbarProps {
  title: string;
  percents: number;
}

const Skillbar: FC<SkillbarProps> = ({ title, percents }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useVisibility(ref);

  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex justify-between items-center">
        <h1>{title}</h1>
        <h1>{percents}%</h1>
      </div>
      <div className={`w-full h-[12px] rounded-lg bg-black relative z-0`}>
        <div
          className={`${
            isVisible ? 'skillbar' : ''
          } bg-secondary rounded-lg h-[12px] left-0 absolute top-0 z-[1]`}
          style={{ maxWidth: `${percents}%` }}
          ref={ref}
        ></div>
      </div>
    </div>
  );
};

export default Skillbar;

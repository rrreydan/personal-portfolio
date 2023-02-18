import { FC, useEffect, useRef, useState } from 'react';

interface SkillbarProps {
  title: string;
  percents: number;
}

const Skillbar: FC<SkillbarProps> = ({ title, percents }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Tracking the appearance of an element on the screen to play the animation
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
      console.log(isVisible);
    });

    if (ref.current !== null) {
      observer.observe(ref.current);
    }
  }, []);

  return (
    <div className="flex flex-col gap-3 w-[225px] md:w-[300px] lg:w-[350px] xl:w-[500px]">
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

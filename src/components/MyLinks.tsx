import { FC, useRef } from 'react';
import { links } from '../constants';
import useVisibility from '../hooks/useVisibility';
import styles from '../style';
import Button from './Button';

const MyLinks: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useVisibility(ref);

  return (
    <div className={`${styles.paddingX} ${styles.flexCenter} w-full`}>
      <div className={`${styles.boxWidth}`}>
        <section className="lg:py-28 py-12">
          <div
            className={`flex items-center flex-col gap-5 lg:gap-7 justify-center opacity-0 ${
              isVisible ? 'appearance' : ''
            }`}
            ref={ref}
          >
            <div className="flex flex-1 font-inter flex-col justify-center gap-5 lg:gap-7 text-white">
              <h1 className="font-semibold xl:text-[72px] lg:text-[62px] text-[40px]">
                My <span className="text-gradient">links</span>
              </h1>
              <div className="w-full">
                <div className="flex flex-wrap gap-5 lg:gap-7 items-center">
                  {links.map(link => (
                    <Button
                      key={link.id}
                      title={link.title}
                      href={link.href}
                      icon={link.icon}
                    />
                  ))}
                </div>
                <h2 className="my-3 lg:my-7 xl:text-[52px] lg:text-[42px] text-[20px] font-medium">
                  Or
                </h2>
                <Button title="Contacts" href="/contacts" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyLinks;

import Icon from '@mdi/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  title: string;
  href: string;
  icon?: string;
}

const Button: FC<ButtonProps> = ({ href, title, icon }) => {
  const screenWidth = window.screen.width;

  return (
    <button className="h-[40px] w-[60px] md:h-[60px] md:w-[200px] outline outline-white hover:bg-white text-white hover:text-secondary rounded-[30px] max-w-[200px] font-medium xl:text-[24px] md:text-[19px] text-[14px] shadow-[0_0_20px_5px] md:shadow-[0_0_40px_5px] md:shadow-secondary/30 shadow-secondary/30 hover:shadow-secondary/40 transition-all">
      <Link
        className="flex items-center justify-center gap-2 px-5 py-2"
        to={href}
      >
        {icon && (
          <Icon
            className="transition-colors"
            path={icon}
            size={screenWidth <= 768 ? 1 : 1.6}
          />
        )}
        {screenWidth < 500 && icon ? '' : title}
      </Link>
    </button>
  );
};

export default Button;

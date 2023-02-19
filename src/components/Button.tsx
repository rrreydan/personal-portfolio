import { FC } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  title: string;
  href: string;
}

const Button: FC<ButtonProps> = ({ title, href }) => {
  return (
    <button className="bg-secondary hover:bg-white text-white hover:text-secondary px-5 py-2 rounded-[30px] max-w-[200px] font-medium xl:text-[24px] lg:text-[19px] text-[14px] shadow-[0_0_20px_5px] lg:shadow-[0_0_40px_5px] lg:shadow-secondary/30 shadow-secondary/30 hover:shadow-secondary/40 transition-all">
      <Link to={href}>{title}</Link>
    </button>
  );
};

export default Button;

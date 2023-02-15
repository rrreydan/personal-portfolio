import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import styles from '../style';

import close from '../assets/icons/close.svg';
import menu from '../assets/icons/menu.svg';
import Logo from './Logo';

const Navbar: FC = () => {
  const [toggle, setToggle] = useState<boolean>(false); // Determines whether the sidebar is displayed

  const changeToggle = () => {
    setToggle(prev => !prev);

    if (toggle === false) {
      document.body.style.overflow = 'hidden';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.body.style.overflow = 'visible';
    }
  };

  return (
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <nav className="w-full flex py-6 justify-between items-center navbar">
          <Logo />

          <ul className="sm:flex hidden justify-end items-center flex-1 gap-10">
            {navLinks.map(navLink => (
              <li
                key={navLink.id}
                className="text-white font-inter font-normal text-gradient-hover"
              >
                <Link to={navLink.href}>{navLink.title}</Link>
              </li>
            ))}
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="Menu"
              className="w-[28px] h-[28px] object-contain z-20"
              onClick={changeToggle}
            />

            <div
              className={`${
                toggle ? 'sidebar-active' : 'sidebar-not-active'
              } flex fixed h-screen top-0 left-0 right-0 bottom-0 bg-primary justify-center items-center z-10`}
            >
              <ul className="flex flex-col justify-end items-center flex-1 gap-28">
                {navLinks.map(navLink => (
                  <li
                    key={navLink.id}
                    className="text-white text-4xl font-inter font-bold text-gradient-hover uppercase"
                  >
                    <Link to={navLink.href}>{navLink.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

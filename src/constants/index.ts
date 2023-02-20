import { mdiGithub, mdiInstagram } from '@mdi/js';

// Navbar buttons
export const navLinks = [
  { id: 1, title: 'Home', href: '/' },
  { id: 2, title: 'Projects', href: '/projects' },
  { id: 3, title: 'Contacts', href: '/contacts' },
  {
    id: 4,
    title: 'Source',
    href: 'https://github.com/rrreydan/personal-portfolio'
  }
];

// Skills
export const skills = [
  { id: 1, title: 'JavaScript', percents: 60 },
  { id: 2, title: 'TypeScript', percents: 40 },
  { id: 3, title: 'ReactJS', percents: 50 },
  { id: 4, title: 'HTML', percents: 90 },
  { id: 5, title: 'CSS', percents: 70 },
  { id: 6, title: 'Java', percents: 60 },
  { id: 7, title: 'Python', percents: 40 },
  { id: 8, title: 'SQL (PostgreSQL)', percents: 20 }
];

// Links
export const links = [
  {
    id: 1,
    title: '@rrreydan',
    href: 'https://instagram.com/rrreydan',
    icon: mdiInstagram
  },
  {
    id: 2,
    title: '@rrreydan',
    href: 'https://github.com/rrreydan',
    icon: mdiGithub
  }
];

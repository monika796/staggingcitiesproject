import { Menu } from '@/types/menu'

const menuData: Menu[] = [
  {
    id: 1,
    title: 'Home',
    newTab: false,
    path: '/',
  },
  {
    id: 2,
    title: 'About',
    newTab: false,
    path: '/about-us',
  },

  // {
  //   id: 2.3,
  //   title: "Docs",
  //   newTab: false,
  //   path: "/docs",
  // },
  {
    id: 3,
    title: 'Programs',
    newTab: false,
    path: '/programs',
    submenu: [
      {
        id: 34,
        title: 'Leadership Circle',
        newTab: false,
        path: '/leadership-circle',
      },
      {
        id: 34,
        title: 'VantagePoint™',
        newTab: false,
        path: '/vantage-point',
      },
    ],
  },
  {
    id: 2.1,
    title: 'Articles',
    newTab: false,
    path: '/articles',
  },
  {
    id: 4,
    title: 'Contact',
    newTab: false,
    path: '/contact',
  },
  {
    id: 5,
    title: 'Book',
    newTab: false,
    path: '/book',
  },
  {
    id: 6,
    title: 'Donate',
    newTab: false,
    path: '/donation',
  },
]

export default menuData

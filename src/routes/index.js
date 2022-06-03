import * as Views from '../views';

const routes = [
  {
    id: 'route-001',
    path: '*',
    component: Views.NoPageFound,
    requireAuth: false,
  },
  {
    id: 'route-002',
    path: '/home',
    component: Views.Home,
    requireAuth: false,
  },
  {
    id: 'route-003',
    path: '/',
    component: Views.Home,
    requireAuth: false,
  },
  {
    id: 'route-004',
    path: '/about',
    component: Views.About,
    requireAuth: false,
  },
  {
    id: 'route-005',
    path: '/blog',
    component: Views.Blog,
    requireAuth: false,
  },
  {
    id: 'route-006',
    path: '/contact',
    component: Views.Contact,
    requireAuth: false,
  },
  {
    id: 'route-007',
    path: '/my-skills',
    component: Views.MySkills,
    requireAuth: false,
  },
  {
    id: 'route-008',
    path: '/work',
    component: Views.Work,
    requireAuth: false,
  },
];

export default routes;

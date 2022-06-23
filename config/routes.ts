export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/',
    redirect: '/CustomerList/Personal',
  },
  {
    path: '/CustomerList',
    name: 'CustomerList',
    icon: 'crown',
    // access: 'canAdmin',
    routes: [
      {
        path: '/CustomerList/Group',
        name: 'Group',
        icon: 'smile',
        component: './CustomerList/Group',
      },
      {
        path: '/CustomerList/Personal',
        name: 'Personal',
        icon: 'smile',
        component: './CustomerList/Personal',
      },
    ],
  },
  {
    path: '/ResourceManagement',
    name: 'ResourceManagement',
    icon: 'crown',
    // access: 'canAdmin',
    routes: [
      {
        path: '/ResourceManagement/ScienceVideo',
        name: 'ScienceVideo',
        icon: 'smile',
        component: './ResourceManagement/ScienceVideo',
      },
    ],
  },

  {
    component: './404',
  },
];

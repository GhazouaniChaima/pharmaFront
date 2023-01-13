import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'Utilisateurs',
    icon: 'people-outline',
    link: '/pages/users',
  },
  {
    title: 'FONCTIONNALITÉS',
    group: true,
  },
 
  {
    title: 'medicaments',
    icon: 'globe-2-outline',
    link: '/pages/medicaments/list-medicaments',
    
  },

/*
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },*/
];

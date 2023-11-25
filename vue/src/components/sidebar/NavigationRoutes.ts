export interface INavigationRoute {
  name: string
  displayName: string
  meta: { icon: string }
  children?: INavigationRoute[]
}

export default {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [
    {
      name: 'project',
      displayName: 'project',
      meta: {
        icon: 'hotel',
      },
    },
    {
      name: 'COMPETITIVE PESEARCH',
      displayName: 'COMPETITIVE PESEARCH',
      meta: {
        icon: 'support',
      },
    },
    {
      name: 'KEYWORD PESEARCH',
      displayName: 'KEYWORD PESEARCH',
      meta: {
        icon: 'eye',
      },
    },
    {
      name: 'BACKLINK PESEARCH',
      displayName: 'BACKLINK PESEARCH',
      meta: {
        icon: 'report',
      },
    },
    {
      name: 'ON PAGE & TECH SEO',
      displayName: 'ON PAGE & TECH SEO',
      meta: {
        icon: 'chat',
      },
    },
    {
      name: 'Account',
      displayName: 'ACCOUNT',
      meta: {
        icon: 'settings',
      },
    },

    

  ] as INavigationRoute[],
}

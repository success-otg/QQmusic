/**
 * Created by sailiting on 2018/5/2.
 */
export const name = {
  path: 'home',
  name: 'czy_home',
  component: r => require.ensure([], () => r(require('./index.vue')), 'czy_home'),
  meta: {title: '财智云'},
  children: [
    {
      path: 'front',
      name: 'home_front',
      component: r => require.ensure([], () => r(require('./front.vue')), 'czy_home'),
      meta: {title: '财智云', keepAlive: true,}
    }
  ]
};

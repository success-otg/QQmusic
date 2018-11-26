/**
 * Created by Bll on 2018/4/8.
 */
export const name = [
  {
    path: '404',
    name: 'czy-404',
    component: r => require.ensure([], () => r(require('./404.vue')), 'czy_public'),
    meta: {title: '财智云'}
  }, {
    path: 'develop',
    name: 'czy-develop',
    component: r => require.ensure([], () => r(require('./develop.vue')), 'czy_public'),
    meta: {title: '财智云'}
  }
];

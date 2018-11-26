import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const modules = []
modules.push(require('./apps/home/route').name)
const routes = [
  {
    path: __config.Default.PATH_BEGIN,
    name: 'web',
    component: {template: '<router-view></router-view>'},
    redirect: __config.Default.PATH_BEGIN + '/czy/home',
    children: [
      {
        path: 'czy',
        name: 'czy',
        component: require('./apps/commons/application.vue'),
        children: modules.concat(require('./apps/public/route').name)
      }
    ]
  }, {
    path: '*',
    redirect: __config.Default.PATH_BEGIN + '/czy/home'
  }
];
const router = new Router({
  mode: 'history',
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0};
  }
});
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 登录权限
    if (session.getSession('USERINFO')) {
      console.log('已登录，跳转到:' + to.fullPath);
      next();
    } else {
      next({path: '/czy/home'});
    }
  } else {
    next();
  }
});
export default router;

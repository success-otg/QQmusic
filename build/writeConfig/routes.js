const fs = require('fs')
const path = require('path')
const render = require('json-templater/string')
const uppercamelcase = require('uppercamelcase')

const OUTPUT_PATH = path.resolve('src/routes.js')

let MAIN_TEMPLATE = `import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const modules = []
{{routes}}
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
  if (to.meta.title) {
    ddSetTitle(to.meta.title);
    dd.ready(() => {
      dd.biz.navigation.setTitle({title: to.meta.title});
    });
  }
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
`

const routes = global.myConfig.MODULE

let routeComponentTemplate = []
let ROUTE_TEMPLATE = 'modules.push(require(\'./apps/{{routeName}}/route\').name)'
routes.forEach(name => {
  routeComponentTemplate.push(render(ROUTE_TEMPLATE, {
    routeName: name
  }))
})

const template = render(MAIN_TEMPLATE, {
  routes: routeComponentTemplate.join('\n')
})

module.export = new Promise((resolve, reject) => {
  fs.writeFile(OUTPUT_PATH, template, function (err) {
    if (err) {
      console.error(err)
      reject(err)
    } else {
      resolve()
    }
  })
})

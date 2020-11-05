import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './routes'

Vue.use(Router)

const router = new Router({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  const role = localStorage.getItem('login_name');
  if (!role && to.path !== '/login') {
    next('/login');
  } else {
    next();
  }
});


export default router

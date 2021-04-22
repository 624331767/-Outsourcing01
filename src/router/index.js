import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
// import arror from '../views/arror.vue'
// import classes from '../views/classes.vue'
// import posyt from '../views/posyt.vue'
// import read from '../views/read.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: home },
  // { path: '/arror', component: arror },
  // { path: '/classes', component: classes },
  // { path: '/posyt', component: posyt },
  // { path: '/read', component: read }

  
]

const router = new VueRouter({

  routes
})

export default router

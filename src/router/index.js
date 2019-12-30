import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/login'
import writeArticle from '@/components/article/writeArticle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      component: index
    },
    {
      path:'/article/write',
      component: writeArticle
    }
  ]
})

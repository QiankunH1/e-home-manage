import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const components={
  layout:()=>import('@/views/layout'),
  home:()=>import('@/views/home/index'),
  login:()=>import('@/views/login/index'),
  userlist:()=>import('@/views/user/userlist'),
  adduser:()=>import('@/views/user/adduser'),
  newslist:()=>import('@/views/news/newslist'),
  addnews:()=>import('@/views/news/addnews'),
  imgslist:()=>import('@/views/swiper/imgslist'),
  addimgs:()=>import('@/views/swiper/addimgs')
}
const router= new Router({
  routes: [
      {
        path: '/',
        name: 'login',
        component: components.login
      },
      {
      path: '/layout',
      name: 'layout',
      component: components.layout,
      redirect:'/layout/home',
      children:[
        {
          path: 'home',
          name: 'home',
          component: components.home
        },
        {
          path: 'userlist',
          name: 'userlist',
          component: components.userlist
        },
        {
          path: 'adduser',
          name: 'adduser',
          component: components.adduser
        },
        {
          path: 'imgslist',
          name: 'imgslist',
          component: components.imgslist
        },
        {
          path: 'addimgs',
          name: 'addimgs',
          component: components.addimgs
        },
        {
          path: 'newslist',
          name: 'newslist',
          component: components.newslist
        },
        {
          path: 'addnews',
          name: 'addnews',
          component: components.addnews
        },
      ]
    },
   
  ]
})


export default router;
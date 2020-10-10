import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import A from '@/components/router-base/a.vue'
import B from '@/components/router-base/b.vue'
import Notpage from '@/components/404.vue'
import Home from '@/components/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: '*',
      component: Notpage
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/404',
      name: '404',
      component: Notpage
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path: '/a',
          name: 'a',
          component: A
        },
        {
          path: '/b',
          name: 'b',
          component: B
        },
      ]
    }
  ]
})

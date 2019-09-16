import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/HomeView.vue'
import TabView from './components/goods/TabViewF.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import GoodsTabs from './components/GoodsTabs.vue'
// import  RegisterView from './views/RegisterView.vue'
import Detail from'./components/gds/Detail.vue'
import GoodsPage from './components/gds/GoodsPage.vue'


Vue.use(VueAxios,axios)
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
        
       
      ]
    },
    {
      path: '/loginView',
      name: 'loginView',
      component:()=>import('./views/login_and_register/LoginView.vue'),
      // component:()=>import('./views/Rating/Area.vue'),

      },
 
    {
      path: '/list/goods',
      name: 'list',
      // component: TabView,
      component:()=>import('./components/gds/GoodsPage.vue'),
      children:[
        {
          path:'detail/:id',
          name:'detail',
          // component:()=>import('./components/gds/Detail.vue')
          component:
            Detail,
          //   GoodsPage,
          children:[
            {
              path:'detailShow/:dkdk',
              name:'detailShow',
              component:Detail,
            }
          ]


          
        }
      ]
    },
  
    {
      path: '/public',
      name: 'public',
  
      component: () => import('./views/PublicView.vue')
    },
    {
      path: '/rating',
      name: 'rating',
     
      component: () => import( './views/RatingView.vue'),
      children:[
        {
           path:'/rating/person',
          name:'person',
          component: () => import('./views/Rating/Person.vue')
        },
        {
          path:'member',
         name:'member',
         component: () => import('./views/Rating/Member.vue')
       },
       {
        path:'area',
       name:'area',
       component: () => import('./views/Rating/Area.vue')
     },
     {
      path:'city',
     name:'city',
     component: () => import('./views/Rating/City.vue')
   },
   {
    path:'province',
   name:'province',
   component: () => import('./views/Rating/Province.vue')
 },
      ]
    },
    
    {
      path: '/shopCart',
      name: 'shopCart',
   
      component: () => import('./views/ShopCartView.vue')
    },
    {
      path: '/personInfo',
      name: 'personInfo',
      
      component: () => import('./views/PersonInfoView.vue')
    },
    {
      path: '/goodsDetail',
      name: 'goodsDetail',
    
      component: () => import( './views/DetailView.vue')
    }

  ]
})

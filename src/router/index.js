import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      public: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
    meta:{
      public: true
    }
  },
  {
    path: '/gestion',
    name: 'Gestion',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "gestion" */ '../views/Gestion.vue'),
    meta:{
      auth: true
    },
    children: [
      {
        path: '/',
        name: 'User',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "user" */ '../views/Panel.vue'),
        meta:{
          auth: true
        }
      },
      {
        path: 'categoria',
        name: 'Categoria',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "categoria" */ '../views/Categoria.vue'),
        meta:{
          auth: true,
          storekeeper: true
        }
      },
      {
        path: 'articulos',
        name: 'Articulo',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "articulo" */ '../views/Articulo.vue'),
        meta:{
          auth: true,
        }
      },
      {
        path: 'usuarios',
        name: 'Usuario',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "usuario" */ '../views/Usuario.vue'),
        meta:{
          auth: true,
          seller: true,
          storekeeper: true
        }
      }
    ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.public)){
    next();
  }else if(to.matched.some(record => record.meta.auth)){
    // Validate Auto Login
    store.dispatch('autoLogin')
    // Validation User
    if(store.state.user){
      // Validation Administrator
      if(to.matched.some(record => record.meta.seller) && store.state.user.rol === 'Vendedor'){
        next({
          name: from.name
        });
      }
      else if(to.matched.some(record => record.meta.storekeeper) && store.state.user.rol === 'Almacenista'){
        next({
          name: from.name
        });
      }
      else if(store.state.user.rol != 'Administrador' && store.state.user.rol != 'Vendedor' && store.state.user.rol != 'Almacenista'){
        next({
          name: from.name
        });
      }
      else{
        next();
      }
    }
    else{
      next({
        path: "/login"
      });
    }
  }else{
    next();
  }
})

export default router

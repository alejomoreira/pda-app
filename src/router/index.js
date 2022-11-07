import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            title: 'Home Page - Example App',
            metaTags: [
              {
                name: 'description',
                content: 'The home page of our example app.'
              },
              {
                property: 'og:description',
                content: 'The home page of our example app.'
              }
            ]
          }
    },
    {
        path: '/sobre-pda',
        name: 'Sobre PDA',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/contacto',
        name: 'Contacto',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue'),
        meta: {
            title: 'Home Page - Example App',
            metaTags: [
              {
                name: 'description',
                content: 'The home page of our example app.'
              },
              {
                property: 'og:description',
                content: 'The home page of our example app.'
              }
            ]
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    document.title = process.env.VUE_APP_TITLE + `${to.meta.title}`;
    next();
})

router.afterEach((to, from, failure) => {
    console.log(to);
    console.log(from);
    console.log(failure);
})

export default router

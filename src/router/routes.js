import HomeView from '../views/HomeView.vue'
import Sculptures from '@/stores/sculptures';
//import AppConfig from '../app.config'

export let routes = [
    {
        path: '/construccion',
        name: 'construccion',
        component: () => import(/* webpackChunkName: "about" */ '../views/MaintenanceMode.vue'),
        props: { name: 'construccion' },
        meta: { active: 1 }
    },
    {
        path: '/mantenimiento',
        name: 'mantenimiento',
        component: () => import(/* webpackChunkName: "about" */ '../views/MaintenanceMode.vue'),
        props: { name: 'mantenimiento' },
        meta: { active: 1 }
    },
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            title: 'Home Page - Example App',
            active: 1,
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
        path: '/:catchAll(.*)',
        name: 'ErrorPage',
        meta: { active: 1 },
        component: () => import(/* webpackChunkName: "about" */ '../views/404View.vue')
     },
     {
        path: '/sobre-pda',
        name: 'Sobre Paseo de las Américas',
        meta: { active: 1 },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutPDAView.vue')
    },
     {
        path: '/memory-game',
        name: 'Memory Game',
        meta: { active: 1 },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/MemoryGame.vue')
    },
    {
        path: '/restauracion',
        name: 'Restauración',
        meta: { active: 1 },
        component: () => import(/* webpackChunkName: "about" */ '../views/RestorationView.vue')
    },
    {
        path: '/juguemos',
        name: 'Juguemos',
        meta: { active: 1 },
        component: () => import(/* webpackChunkName: "about" */ '../views/MemoryGame.vue')
    },
    {
        path: '/contacto',
        name: 'Contacto',
        component: () => import(/* webpackChunkName: "about" */ '../views/ContactView.vue'),
        meta: {
            active: 1,
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

// Add dynamics routes for Sculptures
Sculptures.forEach(scul => {
    let r = {
        path: '/' + scul.path,
        name: scul.name,
        status: scul.status,
        component: () => import(/* webpackChunkName: "about" */ '../views/SculptureView.vue'),
        props: { data: scul},
        meta: {
            active: scul.active,
            title: scul.title,
            metaTags: [
                {
                    name: 'description',
                    content: scul.description
                },
                {
                    property: 'og:description',
                    content: scul.description
                }
            ]
        }
    };
    routes.push(r)
});
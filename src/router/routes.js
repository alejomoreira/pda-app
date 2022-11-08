import HomeView from '../views/HomeView.vue'

export let routes = [
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
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutPDAView.vue')
    },
    {
        path: '/restauracion',
        name: 'Restauración',
        component: () => import(/* webpackChunkName: "about" */ '../views/RestorationView.vue')
    },
    {
        path: '/mediacion',
        name: 'Mediación',
        component: () => import(/* webpackChunkName: "about" */ '../views/MediationView.vue')
    },
    {
        path: '/contacto',
        name: 'Contacto',
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
    },
    {
        path: '/metamorfosis',
        name: 'Metamorfosis',
        component: () => import( '../views/SculptureView.vue'),
        props: { name: "Metamorfosis" },
        meta: {
            title: 'Metamorfosis',
            metaTags: [
              {
                name: 'description',
                content: 'Metamorfosis'
              },
              {
                property: 'og:description',
                content: 'Metamorfosis'
              }
            ]
        }
    },
    {
        path: '/escultura2',
        name: 'Escultura 2',
        component: () => import( '../views/SculptureView.vue'),
        props: { name: "Escultura 2" },
        meta: {
            title: 'Escultura 2',
            metaTags: [
              {
                name: 'description',
                content: 'Metamorfosis'
              },
              {
                property: 'og:description',
                content: 'Metamorfosis'
              }
            ]
        }
    }
]
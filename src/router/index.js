import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes.js'

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    document.title = process.env.VUE_APP_TITLE + ` - ${to.meta.title}`;
    next();
})

//router.afterEach((to, from, failure) => {
    //console.log(to);
    //console.log(from);
    //console.log(failure);
//})

export default router

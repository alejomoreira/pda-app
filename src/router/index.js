import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes.js'
import AppConfig from '../app.config'

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {

    if (AppConfig.mode != "normal" && to.path != "/" + AppConfig.mode ) {
        next(AppConfig.mode)
    } else {
        // Normal routing
        document.title = AppConfig.metas.title + (typeof to.meta.title != "undefined" ? ` - ${to.meta.title}` : "");
        // Check if page is active
        if (to.meta.active == 1) {
            next();
        } else {
            next("construccion");
        }
    }

    /*
    if (AppConfig.mode != "normal" && to.path != "/" + AppConfig.mode ) {
        next(AppConfig.mode)
    } else {
   
    }
    */
})


export default router

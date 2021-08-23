import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';

import { baseApiUrl, userKey } from '../global';

import Auth from '../components/auth/Auth.vue';
import Home from '../components/home/Home.vue';
import AdminPages from '../components/admin/AdminPages.vue';
import ArticlesByCategory from '../components/article/ArticlesByCategory.vue';
import ArticleById from '../components/article/ArticleById.vue';

Vue.use(VueRouter);

const routes = [{
    name: 'auth',
    path: '/auth',
    component: Auth
},
{
    name: 'home',
    path: '/',
    component: Home
},
{
    name: 'adminPages',
    path: '/admin',
    component: AdminPages,
    meta: { requiresAdmin: true }
},
{
    name: 'articlesByCategory',
    path: '/categories/:id/articles',
    component: ArticlesByCategory
},
{
    name: 'articleById',
    path: '/articles/:id',
    component: ArticleById
}]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

router.beforeEach(async (to, from, next) => {
    const json = localStorage.getItem(userKey)

    if (to.matched.some(record => record.meta.requiresAdmin)) {
        const user = JSON.parse(json)
        const admin = await axios.post(`${baseApiUrl}/validateAdmin`, user)

        user && admin.data ? next() : next({ path: '/' })
    } else {
        next()
    }
})

export default router;
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../views/HomeView.vue')
        },
        {
            path: '/annonces',
            name: 'Posts',
            component: () => import('../views/PostsView.vue')
        },
        {
            path: '/nos-guides',
            name: 'Articles',
            component: () => import('../views/ArticlesView.vue')
        },
        {
            path: '/a-propos',
            name: 'About',
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/se-connecter',
            name: 'Login',
            component: () => import('../views/LoginView.vue')
        },
        {
            path: '/inscription',
            name: 'Register',
            component: () => import('../views/RegisterView.vue')
        },
        {
            path: '/password-reset',
            name: 'Password-reset',
            component: () => import('../views/PasswordResetView.vue')
        },
        {
            path: '/nous-contacter',
            name: 'Nous-contacter',
            component: () => import('../views/ContactView.vue')
        },
        {
            path: '/je-suis-interesse',
            name: 'je-suis-interesse',
            component: () => import('../views/InteresseView.vue')
        },
        {
            path: '/test',
            name: 'test',
            component: () => import('../views/TestView.vue')
        }
    ]
})

export default router

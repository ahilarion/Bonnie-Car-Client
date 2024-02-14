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
            path: '/ajouter-annonce',
            name: 'AddPost',
            component: () => import('../views/AddPostView.vue')
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
            path: '/test',
            name: 'test',
            component: () => import('../views/TestView.vue')
        }
    ]
})

export default router

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../pages/HomePage.vue')
    }
]

export default routes
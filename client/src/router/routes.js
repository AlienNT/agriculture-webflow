const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/pages/HomePage.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/pages/AboutPage.vue')
    },
    {
        path: '/blog',
        name: 'blog',
        component: () => import('@/pages/BlogPage.vue')
    },
    {
        path: '/blog/:id',
        name: 'blog-single',
        component: () => import('@/pages/BlogSinglePage.vue')
    },
    {
        path: '/changelog',
        name: 'changelog',
        component: () => import('@/pages/ChangelogPage.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('@/pages/ContactPage.vue')
    },
    {
        path: '/licenses',
        name: 'licenses',
        component: () => import('@/pages/LicensesPage.vue')
    },
    {
        path: '/password-protect',
        name: 'password-protect',
        component: () => import('@/pages/PasswordProtectPage.vue')
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        component: () => import('@/pages/PortfolioPage.vue')
    },
    {
        path: '/portfolio/:id',
        name: 'portfolio-single',
        component: () => import('@/pages/PortfolioSinglePage.vue')
    },
    {
        path: '/service',
        name: 'service',
        component: () => import('@/pages/ServicePage.vue')
    },
    {
        path: '/service/:id',
        name: 'service-single',
        component: () => import('@/pages/ServiceSinglePage.vue')
    },
    {
        path: '/shop',
        name: 'shop',
        component: () => import('@/pages/ShopPage.vue')
    },
    {
        path: '/shop/:id',
        name: 'shop-single',
        component: () => import('@/pages/ShopSinglePage.vue')
    },
    {
        path: '/team',
        name: 'team',
        component: () => import('@/pages/TeamPage.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: () => import("@/pages/NotFoundPage.vue")
    },
]

export default routes
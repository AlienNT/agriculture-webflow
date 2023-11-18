import {computed, reactive} from "vue";

const state = reactive({
        pages: [
            {
                _id: 1,
                name: 'home',
                bannerImages: {
                    img: '/images/pages_design/img/bg_homepage_image.png',
                    pattern: '/images/pages_design/svg/bg_homepage_pattern.svg'
                }
            },
            {
                _id: 2,
                name: 'about',
                bannerImages: {
                    img: '/images/pages_design/img/bg_about_image.png',
                    pattern: '/images/pages_design/svg/bg_about_pattern.svg'
                }
            },
            {
                _id: 3,
                name: 'blog',
                bannerImages: {
                    img: '/images/pages_design/img/bg_blog.png',
                    pattern: '/images/pages_design/svg/bg_blog_pattern.svg'
                }
            },
            {
                _id: 4,
                name: 'blog-single',
                bannerImages: {
                    img: '/images/pages_design/img/bg_blog-single_image.png',
                    pattern: ''
                }
            },
            {
                _id: 5,
                name: 'contact',
                bannerImages: {
                    img: '/images/pages_design/img/bg_contact_image.png',
                    pattern: '/images/pages_design/svg/bg_contact_pattern.svg'
                }
            },
            {
                _id: 6,
                name: 'portfolio-single',
                bannerImages: {
                    img: '/images/pages_design/img/bg_portfolio-single_image.png',
                    pattern: ''
                }
            },
            {
                _id: 7,
                name: 'portfolio',
                bannerImages: {
                    img: '/images/pages_design/img/bg_portfolio_image.png',
                    pattern: '/images/pages_design/svg/bg_portfolio_pattern.svg'
                }
            },
            {
                _id: 8,
                name: 'service-single',
                bannerImages: {
                    img: '/images/pages_design/img/bg_services-single_image.png',
                    pattern: '/images/pages_design/svg/bg_services-single_pattern.svg'
                }
            },
            {
                _id: 9,
                name: 'service',
                bannerImages: {
                    img: '/images/pages_design/img/bg_services_image.png',
                    pattern: '/images/pages_design/svg/bg_services_pattern.svg'
                }
            },
            {
                _id: 10,
                name: 'shop-single',
                bannerImages: {
                    img: '/images/pages_design/img/bg_shop-single_image.png',
                    pattern: '/images/pages_design/svg/bg_shop-single_pattern.svg'
                }
            },
            {
                _id: 11,
                name: 'shop',
                bannerImages: {
                    img: '/images/pages_design/img/bg_shop_image.png',
                    pattern: '/images/pages_design/svg/bg_shop_pattern.svg'
                }
            },
            {
                _id: 12,
                name: 'team',
                bannerImages: {
                    img: '/images/pages_design/img/bg_team_image.png',
                    pattern: '/images/pages_design/svg/bg_team_pattern.svg'
                }
            },
            {
                _id: 12,
                name: 'utility',
                bannerImages: {
                    img: '',
                    pattern: '/images/pages_design/svg/bg_utility_pattern.svg'
                }
            },
        ]
    }
)

export function usePages() {
    const pages = computed(() => {
        return state.pages
    })

    const bannerImagesByName = (name) => computed(() => {
        return state.pages.find(page => page.name === name)?.bannerImages
    })
    return {
        bannerImagesByName
    }
}
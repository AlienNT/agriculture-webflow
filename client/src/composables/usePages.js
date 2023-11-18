import {computed, reactive} from "vue";

const state = reactive({
        pages: [
            {
                _id: 1,
                name: 'home',
                content: [
                    {
                        _id: 1,
                        type: 'pageBanner',
                        bannerImages: {
                            img: '/images/pages_design/img/bg_homepage_image.png',
                            pattern: '/images/pages_design/svg/bg_homepage_pattern.svg'
                        },
                        bannerContent: {
                            cursive: '100% Natural Food',
                            title: 'Choose the best healthier way of life',
                            buttonLabel: 'Explore Now',
                            buttonRoute: '/shop'
                        },
                    },
                    {
                        _id: 2,
                        type: 'pageCardContent',
                        cursive: 'About Us',
                        title: 'We Believe in Working Accredited Farmers',
                        buttonLabel: `Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.`,
                        buttonRoute: '/shop',
                        list: [
                            {
                                _id: 1,
                                title: 'Organic Foods Only',
                                description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
                                icon: ''
                            },
                            {
                                _id: 2,
                                title: 'Quality Standards',
                                description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
                                icon: ''
                            },
                        ]
                    },
                    {
                        _id: 3,
                        type: 'pageOffers',
                        list: [
                            {
                                _id: 1,
                                label: 'Natural!!',
                                title: 'Get Garden Fresh Fruits',
                                colorScheme: 'dark',
                                image: '/images/pages_design/img/offer_1.jpg'
                            },
                            {
                                _id: 2,
                                label: 'Offer!!',
                                title: 'Get 10% off on Vegetables',
                                colorScheme: 'light',
                                image: '/images/pages_design/img/offer_2.jpg'
                            }
                        ]
                    }
                ]
            },
            {
                _id: 2,
                name: 'about',
                content: [
                    {
                        type: 'pageBanner',
                        bannerImages: {
                            img: '/images/pages_design/img/bg_about_image.png',
                            pattern: '/images/pages_design/svg/bg_about_pattern.svg'
                        }
                    }
                ]
            },
            {
                _id: 3,
                name: 'blog',
                content: [
                    {
                        type: 'pageBanner',
                        bannerImages: {
                            img: '/images/pages_design/img/bg_blog.png',
                            pattern: '/images/pages_design/svg/bg_blog_pattern.svg'
                        }
                    }
                ]
            },
            {
                _id: 4,
                name: 'blog-single',
                content: [
                    {
                        type: 'pageBanner',
                        bannerImages: {
                            img: '/images/pages_design/img/bg_blog-single_image.png',
                            pattern: ''
                        }
                    }
                ]
            },
            {
                _id: 5,
                name: 'contact',
                content: [
                    {
                        type: 'pageBanner',
                        bannerImages: {
                            img: '/images/pages_design/img/bg_contact_image.png',
                            pattern: '/images/pages_design/svg/bg_contact_pattern.svg'
                        }
                    }
                ]
            },
            {
                _id: 6,
                name: 'portfolio-single',
                content: [
                    {
                        type: 'pageBanner',
                        bannerImages: {
                            img: '/images/pages_design/img/bg_portfolio-single_image.png',
                            pattern: ''
                        }
                    }
                ]
            },
            {
                _id: 7,
                name: 'portfolio',
                content: [
                    {
                        type: 'pageBanner',
                        bannerImages: {
                            img: '/images/pages_design/img/bg_portfolio_image.png',
                            pattern: '/images/pages_design/svg/bg_portfolio_pattern.svg'
                        }
                    }
                ]
            },
            {
                _id: 8,
                name: 'service-single',
                content: [
                    {
                        type: 'pageBanner',
                        bannerImages: {
                            img: '/images/pages_design/img/bg_services-single_image.png',
                            pattern: '/images/pages_design/svg/bg_services-single_pattern.svg'
                        }
                    }
                ]
            },
            {
                _id: 9,
                name: 'service',
                content: [
                    {
                        type: 'pageBanner',
                        bannerImages: {
                            img: '/images/pages_design/img/bg_services_image.png',
                            pattern: '/images/pages_design/svg/bg_services_pattern.svg'
                        }
                    }
                ]
            },
            {
                _id: 10,
                name: 'shop-single',
                content: [
                    {
                        type: 'pageBanner',
                        bannerImages: {
                            img: '/images/pages_design/img/bg_shop-single_image.png',
                            pattern: '/images/pages_design/svg/bg_shop-single_pattern.svg'
                        }
                    }
                ]
            },
            {
                _id: 11,
                name: 'shop',
                content: [
                    {
                        type: 'pageBanner',
                        bannerImages: {
                            img: '/images/pages_design/img/bg_shop_image.png',
                            pattern: '/images/pages_design/svg/bg_shop_pattern.svg'
                        }
                    }
                ]
            },
            {
                _id: 12,
                name: 'team',
                content: [
                    {
                        type: 'pageBanner',
                        bannerImages: {
                            img: '/images/pages_design/img/bg_team_image.png',
                            pattern: '/images/pages_design/svg/bg_team_pattern.svg'
                        }
                    }
                ]
            },
            {
                _id: 12,
                name: 'utility',
                content: [
                    {
                        type: 'pageBanner',
                        bannerImages: {
                            img: '',
                            pattern: '/images/pages_design/svg/bg_utility_pattern.svg'
                        }
                    }
                ]
            },
        ]
    }
)

export function usePages() {
    const pages = computed(() => {
        return state.pages
    })

    const getPageByName = (name) => computed(() => {
        return state.pages.find(page => page.name === name)
    })

    const bannerImagesByName = (name) => computed(() => {
        return getPageByName(name).value?.content?.find(contentItem => contentItem?.type === 'pageBanner')?.bannerImages
    })


    return {
        getPageByName,
        bannerImagesByName
    }
}
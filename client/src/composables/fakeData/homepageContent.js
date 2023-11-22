export default {
    _id: 1,
    name: 'home',
    content: [
        {
            _id: 1,
            order: 1,
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
            order: 3,
            type: 'pageCardContent',
            cursive: 'About Us',
            title: 'We Believe in Working Accredited Farmers',
            description: `Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.`,
            buttonLabel: 'Shop Now',
            buttonRoute: '/shop',
            image: '/images/content/home_card_content.png',
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
            order: 2,
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
}
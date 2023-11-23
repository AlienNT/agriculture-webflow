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
                    image: '/images/icon/mailbox.svg'
                },
                {
                    _id: 2,
                    title: 'Quality Standards',
                    description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
                    image: '/images/icon/vegan_food.svg'
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
        },
        {
            _id: 4,
            order: 4,
            type: 'pageShop',
            title: 'Our Products',
            cursive: 'Categories ',
            buttonLabel: 'Load More',
            list: [
                {
                    _id: 1,
                    tag: 'Vegetable',
                    title: 'Calabrese Broccoli',
                    price: 20,
                    discount: 35,
                    rating: 5,
                    image: '/images/content/broccoli.png'

                },
                {
                    _id: 2,
                    tag: 'Fresh',
                    title: 'Fresh Banana Fruites',
                    price: 20,
                    discount: 30,
                    rating: 5,
                    image: '/images/content/banana.png'

                },
                {
                    _id: 3,
                    tag: 'Millets',
                    title: 'White Nuts',
                    price: 20,
                    discount: 25,
                    rating: 4,
                    image: '/images/content/white-nuts.png'

                },
                {
                    _id: 4,
                    tag: 'Vegetable',
                    title: 'Vegan Red Tomato',
                    price: 20,
                    discount: 15,
                    rating: 5,
                    image: '/images/content/tomato.png'

                },
                {
                    _id: 5,
                    tag: 'Health',
                    title: 'Mung Bean',
                    price: 20,
                    discount: 45,
                    rating: 5,
                    image: '/images/content/mung-bean.png'

                },
                {
                    _id: 6,
                    tag: 'Nuts',
                    title: 'Brown Hazelnut',
                    price: 20,
                    discount: 40,
                    rating: 4,
                    image: '/images/content/brown-hazelnut.png'

                },
                {
                    _id: 7,
                    tag: 'Fresh',
                    title: 'Eggs',
                    price: 20,
                    discount: 15,
                    rating: 5,
                    image: '/images/content/eggs.png'

                },
                {
                    _id: 8,
                    tag: 'Fresh',
                    title: 'Zelco Suji Elaichi Rusk',
                    price: 20,
                    discount: 25,
                    rating: 4,
                    image: '/images/content/zelco.png'

                },
            ]
        }
    ]
}
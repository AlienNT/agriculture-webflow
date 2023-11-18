import {computed, reactive} from "vue";

const state = reactive({
    offers: [
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
})

export function useHomepageOffers() {
    const offers = computed(() => {
        return state.offers
    })

    return {
        offers
    }
}
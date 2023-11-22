import {computed, reactive} from "vue";

const state = reactive({
    headerNavigation: [
        {
            _id: 1,
            title: 'home',
            path: '/'
        },
        {
            _id: 2,
            title: 'about',
            path: '/about'
        },
        {
            _id: 3,
            title: 'pages',
            path: '/pages'
        },
        {
            _id: 4,
            title: 'shop',
            path: '/shop'
        },
        {
            _id: 5,
            title: 'projects',
            path: '/projects'
        },
        {
            _id: 6,
            title: 'news',
            path: '/news'
        },
    ]
})

export function useNavigation() {
    const headerNavigation = computed(() => {
        return state.headerNavigation
    })

    function setHeaderNavigation(data) {
        state.headerNavigation = data
    }

    async function fetchHeaderNavigation() {
        //
    }

    return {
        headerNavigation,
        setHeaderNavigation,
        fetchHeaderNavigation
    }
}
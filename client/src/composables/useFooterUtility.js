import {computed, reactive} from "vue";

const state = reactive({
    utilityPagesList: [
        {
            _id: 1,
            title: 'Style Guide',
            path: ''
        },
        {
            _id: 2,
            title: '404 Not Found',
            path: ''
        },
        {
            _id: 3,
            title: 'Password Protected',
            path: ''
        },
        {
            _id: 4,
            title: 'Licences',
            path: ''
        },
        {
            _id: 5,
            title: 'Changelog',
            path: ''
        },
    ]
})

export function useFooterUtility() {
    const utilityPagesList = computed(() => {
        return state.utilityPagesList
    })

    function setUtilityPagesList(data) {
        state.utilityPagesList = data
    }

    return {
        utilityPagesList,
        setUtilityPagesList
    }
}
import {computed, reactive} from "vue";

const state = reactive({
    social: [
        {
            _id: 1,
            type: 'instagram',
            link: ''
        },
        {
            _id: 2,
            type: 'facebook',
            link: ''
        },
        {
            _id: 3,
            type: 'twitter',
            link: ''
        },
        {
            _id: 4,
            type: 'pinterest',
            link: ''
        },
    ]
})

export function useFooterSocial() {
    const social = computed(() => {
        return state.social
    })

    function setSocial(data) {
        state.social = data
    }

    return {
        social,
        setSocial
    }
}
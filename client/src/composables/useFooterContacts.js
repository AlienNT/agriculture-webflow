import {computed, reactive} from "vue";

const state = reactive({
    contacts: [
        {
            _id: 1,
            type: 'email',
            title: 'Email ',
            value: 'needhelp@Organia.com'
        },
        {
            _id: 2,
            type: 'phone',
            title: 'Phone',
            value: '666 888 888'
        },
        {
            _id: 3,
            type: 'text',
            title: 'Address',
            value: '88 road, borklyn street, USA'
        },
    ]
})

export function useFooterContacts() {
    const contacts = computed(() => {
        return state.contacts
    })

    function setContacts(data) {
        state.contacts = data
    }

    return {
        contacts,
        setContacts
    }
}
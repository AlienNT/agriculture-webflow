import {computed, reactive} from "vue";

const state = reactive({
    cart: []
})
export default function useCart() {
    const cart = computed(() => {
        return state.cart
    })

    const cartCounter = computed(() => {
        return state.cart.length ?
            state.cart.reduce((prev, current) => prev + current?.amount)
            : 0
    })

    function setCart(data) {
        state.cart = data
    }

    function addToCart(item) {
        const itemIndex = getItemIndex(item)

        return itemIndex ?
            state.cart[itemIndex].amount++ :
            state.cart.push(item)
    }

    function removeOneInCart(item) {
        const itemIndex = getItemIndex(item)

        if (!itemIndex) return

        return state.cart[itemIndex] ?
            state.cart[itemIndex].amount-- :
            removeInCart(item)

    }

    function removeInCart(item) {
        state.cart.splice(getItemIndex(item), 1)
    }

    function getItemIndex(item) {
        return state.cart?.findIndex(cartItem => cartItem?._id === item?._id)
    }

    return {
        cart,
        addToCart,
        removeOneInCart,
        removeInCart,
        cartCounter
    }
}
import {computed, reactive, watch} from "vue";

const state = reactive({
    viewport: '',
    viewportHeight: 0
})

export function useEvents() {
    const viewport = computed(() => {
        return state.viewport
    })

    function setViewport(value) {
        return state.viewport = value
    }

    function scrollToTop(target = viewport.value) {
        target.scrollTo({top: 0, behavior: "smooth"})
    }

    const viewportHeight = computed(() => {
        return state.viewportHeight
    })

    function setViewportHeight(val) {
        state.viewportHeight = val
    }

    function getViewportHeight() {
        return viewport.value?.offsetHeight
    }

    function setViewportCSSProperty() {
        document.documentElement.style.setProperty('--vh', `${viewportHeight.value}px`)
    }

    watch(() => viewportHeight.value, () => {
        setViewportCSSProperty()
    }, {
        immediate: true
    })

    watch(() => viewport.value, value => {
        if (value) {
            setViewportHeight(getViewportHeight())
        }
    }, {
        immediate: true
    })

    window.onresize = () => {
        const height = getViewportHeight()

        if (viewportHeight.value !== height) {
            setViewportHeight(height)
        }
    }

    return {
        viewport,
        viewportHeight,
        setViewport,
        setViewportHeight,
        getViewportHeight,
        scrollToTop,
        setViewportCSSProperty
    }
}
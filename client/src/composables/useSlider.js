import {computed, reactive, watch} from "vue";

export function useSlider() {

    const state = reactive({
        slides: [],
        activeSlideIndex: 0,
        delay: 0,
        autoplay: false,
        isPaused: false
    })


    const slides = computed(() => {
        return state.slides
    })

    function setSlides(slides) {
        return state.slides = slides
    }

    const activeSlideIndex = computed(() => {
        return state.activeSlideIndex
    })

    function setActiveSlideIndex(index) {
        state.activeSlideIndex = index
    }

    const delay = computed(() => {
        return state.delay
    })

    function setDelay(value) {
        return state.delay = value
    }

    const isPaused = computed(() => {
        return state.isPaused
    })

    function setIsPaused(value) {
        return state.isPaused = value
    }

    const autoplay = computed(() => {
        return state.autoplay
    })

    function setAutoplay(value) {
        return state.autoplay = value
    }

    const calculateIndex = computed(() => {
        return activeSlideIndex.value < slides.value.length - 1 ? activeSlideIndex.value + 1 : 0
    })

    function moveSlides(index = activeSlideIndex.value) {
        for (let slide of slides.value) {
            slide.style.cssText = `transform: translateX(-${100 * index}%)`
        }
    }

    function sliding() {
        if (!autoplay.value) return
        function toSlide() {
            console.log('toSlide')
            if (!isPaused.value) {
                setActiveSlideIndex(calculateIndex.value)
            }
            setTimeout(() => toSlide(), delay.value)
        }

        toSlide()
    }


    function createSlider({slides = [], delay = 0, autoplay = false}) {
        setSlides(slides)
        setDelay(delay)
        setAutoplay(autoplay)
        sliding()
    }

    watch(() => activeSlideIndex.value, (value) => {
        moveSlides(value)
    })


    return {
        slides,
        setSlides,
        activeSlideIndex,
        setActiveSlideIndex,
        delay,
        setDelay,
        moveSlides,
        sliding,
        setIsPaused,
        createSlider
    }
}
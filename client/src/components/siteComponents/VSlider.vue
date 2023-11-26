<script setup>
import {computed, onMounted, ref} from "vue";
import {useSlider} from "@/composables/useSlider.js";

const props = defineProps({
  dots: {
    type: Boolean,
    default: true
  },
  dotsCount: {
    type: Number
  },
  slideList: {
    type: Array
  },
  slideComponent: {
    type: Object,
  },
  autoplay: {
    type: Boolean,
    default: false
  },
  delay: {
    type: Number,
    default: 5000
  }
})

const sliderContainer = ref(null)

const {
  activeSlideIndex,
  setActiveSlideIndex,
  setIsPaused,
  createSlider
} = useSlider()

onMounted(() => {
  createSlider({
    autoplay: props.autoplay,
    delay: props.delay,
    slides: sliderContainer.value.children
  })
})

const isActiveDot = (index) => computed(() => {
  return activeSlideIndex.value + 1 === index
})

</script>
<template>
  <div
      class="slider"
      @mouseenter="setIsPaused(true)"
      @mouseleave="setIsPaused(false)"
  >
    <div class="viewport">
      <div
          class="slides"
          ref="sliderContainer"
      >
        <component
            v-for="(slide, index) in slideList"
            :key="index"
            :is="slideComponent"
            :content="slide"
            class="slide"
        />
      </div>
    </div>
    <div class="dots">
      <div
          v-for="index in slideList?.length"
          :key="index"
          :class="isActiveDot(index).value && 'active'"
          class="dot"
          @click="setActiveSlideIndex(index - 1)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
$activeDotColor: #7EB693;
$dotColor: #C4C4C4;

.slider {
  width: 100%;
}

.viewport {
  width: 100%;
  overflow-x: hidden;
  padding: 5px 0;
  margin-bottom: 20px;
}

.slides {
  display: flex;
}

.slide {
  flex: 0 0 100%;
  transition: transform .5s ease;
}

.dots {
  display: flex;
  justify-content: center;
}

.dot {
  cursor: pointer;
  padding: 4px;

  &:before {
    content: '';
    display: block;
    height: 10px;
    width: 10px;
    background: #C4C4C4;
    border-radius: 50%;
    transition: transform .2s ease;
  }

  &.active {
    &:before {
      background: #7EB693;
    }
  }

  &:hover {
    &:before {
      transform: scale(1.2);
      transform-origin: center;
      background: darken($dotColor, 10%);
    }

    &.active {
      &:before {
        background: darken($activeDotColor, 10%);
      }
    }
  }
}
</style>
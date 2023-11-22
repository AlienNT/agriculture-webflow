<script setup>
import {computed, reactive} from "vue";

const props = defineProps({
  src: {
    type: String
  },
  alt: {
    type: String
  },
  objectFit: {
    type: String,
    default: 'contain'
  },
  backgroundMode: {
    type: Boolean
  }
})

const state = reactive({
  load: false,
  error: false
})

function onLoad() {
  console.log('onError')
  state.error = false
  state.load = true
}

function onError() {
  console.log('onError')
  state.load = true
  state.error = true
}

const backgroundImageStyle = computed(() => {
  return `background-image: url(${props.src});`
})
</script>

<template>
  <div
      v-if="!backgroundMode"
      class="image"
  >
    <img
        v-show="src && state.load && !state.error"
        :class="objectFit"
        :src="src"
        :alt="alt"
        @load="onLoad"
        @error="onError"
    >
    <div
        v-if="state.load && state.error"
        class="image-error">
      404
    </div>
    <div class="no-image" v-else/>
  </div>
  <div
      v-else
      :style="backgroundImageStyle"
      class="background-image"
  />
</template>

<style scoped lang="scss">
.image {
  display: flex;
  border-radius: 5px;
  overflow: hidden;
}

.image, img {
  width: 100%;
  height: 100%;
}

img {
  display: block;
}

.contain {
  object-fit: contain;
}

.cover {
  object-fit: cover;
}

.no-image {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background: rgba(232, 225, 225, 0.40);
}

.background-image {
  width: 100%;
  height: 100%;;
  background-color: #F9F8F8;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  background-blend-mode: multiply;
}
</style>
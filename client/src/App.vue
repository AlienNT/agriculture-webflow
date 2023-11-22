<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheContent from "./components/TheContent.vue";
import TheFooter from "@/components/TheFooter.vue";
import {onMounted, ref, watch} from "vue";

const target = ref(null)
const viewportHeight = ref(null)

function getViewportHeight() {
  return target.value?.offsetHeight
}

function setViewportHeight(val) {
  viewportHeight.value = val
}

onMounted(() => {
  setViewportHeight(getViewportHeight())
})

window.onresize = () => {
  const height = getViewportHeight()

  if (viewportHeight.value !== height) {
    setViewportHeight(height)
  }
}

watch(() => viewportHeight.value, () => {
  document.documentElement.style.setProperty('--vh', `${viewportHeight.value}px`)
}, {immediate: true})
</script>

<template>
  <div class="fullscreen-wrapper">
    <TheHeader/>
    <main
        class="main"
        ref="target"
    >
      <TheContent/>
      <TheFooter/>
    </main>
  </div>
</template>

<style lang="scss">

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.fullscreen-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.main {
  flex: 1 1;
  overflow-y: scroll;
}
</style>

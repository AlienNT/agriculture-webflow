<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheContent from "./components/TheContent.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<template>
  <div class="fullscreen-wrapper">
    <TheHeader/>
    <TheContent/>
  </div>
  <TheFooter/>
</template>

<style lang="scss">

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.fullscreen-wrapper {
  flex: 0 0 100%;
  display: flex;
  flex-direction: column;
}
</style>

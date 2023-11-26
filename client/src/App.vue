<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheContent from "./components/TheContent.vue";
import TheFooter from "@/components/TheFooter.vue";
import SubscribeForm from "@/components/SubscribeForm.vue";
import {onMounted, ref} from "vue";
import {useEvents} from "@/composables/useEvents.js";

const {setViewport} = useEvents()

const target = ref(null)

onMounted(() => {
  setViewport(target.value)
})


</script>

<template>
  <div class="fullscreen-wrapper">
    <TheHeader/>
    <main
        class="main"
        ref="target"
    >
      <TheContent/>
      <SubscribeForm/>
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

<script setup>

import LogoImage from "./LogoImage.vue";
import {useRouter} from "vue-router";
import {routeTo} from "@/helpers/buttonHelper.js";
import {useEvents} from "@/composables/useEvents.js";

const {scrollToTop} = useEvents()

const route = useRouter()

function onClick() {
  route.currentRoute.value.name !== 'home' ? routeTo('/') : scrollToTop()
}

</script>

<template>
  <router-link class="logo" @click.prevent="onClick" to="/">
    <div class="logo-icon">
      <LogoImage/>
    </div>
    <div class="logo-text">
      Organick
    </div>
  </router-link>
</template>

<style scoped lang="scss">
.logo {
  display: flex;
  align-items: center;
  gap: 4px;
}

.logo-icon {
  height: 53px;
  width: 36px;
}

.logo-text {
  color: map-get($colors, greenishBlue);
  font-family: $mainFont;
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
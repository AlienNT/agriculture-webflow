<script setup>

import LogoImage from "./LogoImage.vue";
</script>

<template>
<router-link class="logo" to="/">
  <div class="logo-icon">
    <LogoImage/>
  </div>
  <div class="logo-text">
    Organick
  </div>
</router-link>
</template>

<style scoped>
.logo {
  display: flex;
  align-items: center;
  height: 53px;
  width: 36px;
  gap: 4px;
}
.logo-text {
  color: #274C5B;
  font-family: Roboto,sans-serif;
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
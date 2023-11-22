<script setup>
import {computed} from "vue";

const props = defineProps({
  itemData: {
    type: Object
  }
})

const title = computed(() => {
  return props?.itemData?.title
})

const path = computed(() => {
  return props?.itemData?.path
})
</script>

<template>
  <router-link
      class="footer-utility-item"
      :to="path"
  >
    {{ title }}
  </router-link>
</template>

<style scoped lang="scss">
$color: map-get($colors, grayishBlue);

.footer-utility-item {
  color: $color;
  font-family: $secondFont;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 272.9%; /* 49.122px */
}
</style>
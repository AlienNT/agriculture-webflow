<script setup>

import VTitle from "@/components/siteComponents/VTitle.vue";
import {computed} from "vue";
import {useRouter} from "vue-router";
import {usePages} from "@/composables/usePages.js";

const props = defineProps({
  value: {
    type: String
  },
  backgroundImage: {
    type: String
  },
  backgroundPattern: {
    type: String
  },
  pageName: {
    type: String
  }
})


const {currentRoute} = useRouter()
const {bannerImagesByName} = usePages()

const images = computed(() => {
  return bannerImagesByName(props.pageName || currentRoute.value.name).value
})

const style = computed(() => {
  const urls = [
    images.value?.pattern,
    images.value?.img
  ]

  const urlsToBg = urls.filter(url => url).map(url => `url(${url})`).join(', ')

  return `background-image: ${urlsToBg}`
})
</script>

<template>
  <div
      class="page-banner"
      :style="style"
  >
    <div
        v-if="value"
        class="page-banner__title"
    >
      <VTitle
          :value="value"
      />
    </div>
    <slot name="content"/>
  </div>
</template>

<style scoped lang="scss">
$color: map-get($colors, greenishBlue);
$bgColor: map-get($colors, moderateGreen);

.page-banner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $bgColor;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
}

.page-banner__title {
  color: $color;
  font-family: $mainFont;
  font-size: 70px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  width: 100%;
}
</style>
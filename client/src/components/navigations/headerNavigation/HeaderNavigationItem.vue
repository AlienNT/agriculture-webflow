<script setup>
import {computed} from "vue";

const props = defineProps({
  linkData: {
    type: Object
  }
})

const path = computed(() => {
  return props.linkData?.path
})

const title = computed(() => {
  return props.linkData?.title
})

</script>

<template>
  <li class="navigation-list__item">
    <router-link
        class="navigation-list__item-link"
        :to="path"
    >
      {{ title }}
    </router-link>
  </li>
</template>

<style scoped lang="scss">
@import "../../../assets/css/variables";

.navigation-list__item-link {
  color: $colorPrimary;
  font-family: $mainFont;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: block;

  &:first-letter {
    text-transform: uppercase;
  }
}
</style>
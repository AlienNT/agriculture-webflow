<script setup>
import {computed} from "vue";
import PageBanner from "@/components/pageComponents/PageBanner.vue";
import TheFooter from "@/components/TheFooter.vue";

const props = defineProps({
  pageBannerTitle: {
    type: String
  },
  pageBannerImage: {
    type: String
  },
  pageContent: {
    type: Array
  },
  maxHeight: {
    type: [Number, String],
    default: 450
  }
})

const style = computed(() => {
  if (isNaN(props.maxHeight)) return

  return props.maxHeight ? `max-height: ${props.maxHeight}px;` : null
})

</script>

<template>
  <div class="page-template">
    <div class="page-content">
      <slot name="content"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-template {
  display: flex;
  flex-direction: column;
  min-height: $viewportHeight;
}

.page-content {
  flex: 0 0 100%;
  height: 100%;
}
</style>
<script setup>
import {computed} from "vue";
import PageBanner from "@/components/pageComponents/PageBanner.vue";

const props = defineProps({
  pageBannerTitle: {
    type: String
  },
  pageBannerImage: {
    type: String
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
    <div
        class="page-banner"
        :style="style"
    >
      <PageBanner
          :value="pageBannerTitle"
          :image="pageBannerImage"
      >
        <template v-slot:content>
          <slot name="bannerContent"></slot>
        </template>
      </PageBanner>
    </div>
    <div class="page-content">
      <slot name="content"/>
    </div>
  </div>
</template>

<style scoped>
.page-template {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.page-banner {
  flex: 1;
}
</style>
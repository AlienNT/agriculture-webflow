<script setup>
import {computed} from "vue";
import HomeBanner from "@/components/pageComponents/home/HomeBanner.vue";
import HomeContentCard from "@/components/pageComponents/home/HomeContentCard.vue";
import HomeOffers from "@/components/pageComponents/home/HomeOffers.vue";
import HomeShop from "@/components/pageComponents/home/HomeShop.vue";
import HomeOfferProducts from "@/components/pageComponents/home/HomeOfferProducts.vue";

const props = defineProps({
  componentType: {
    type: String
  },
  componentData: {
    type: Object
  }
})

const component = computed(() => {
  switch (props.componentData?.type) {
    case 'pageBanner':
      return HomeBanner;
    case 'pageCardContent':
      return HomeContentCard
    case 'pageOffers':
      return HomeOffers
    case 'pageShop':
      return HomeShop
    case 'pageOfferProducts':
      return HomeOfferProducts
  }
})

</script>

<template>
  <component
      :is="component"
      :content="componentData"
  />
</template>

<style scoped>

</style>
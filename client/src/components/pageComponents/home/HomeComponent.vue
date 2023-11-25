<script setup>
import {computed} from "vue";
import HomeBanner from "@/components/pageComponents/home/HomeBanner.vue";
import HomeContentCard from "@/components/pageComponents/home/HomeContentCard.vue";
import HomeOffers from "@/components/pageComponents/home/HomeOffers.vue";
import HomeShop from "@/components/pageComponents/home/HomeShop.vue";
import HomeOfferProducts from "@/components/pageComponents/home/HomeOfferProducts.vue";
import HomeWhoWeAre from "@/components/pageComponents/home/HomeWhoWeAre.vue";
import HomeGallery from "@/components/pageComponents/home/HomeGallery.vue";
import HomeTestimonial from "@/components/pageComponents/home/HomeTestimonial.vue";

const props = defineProps({
  componentType: {
    type: String
  },
  componentData: {
    type: Object
  }
})

const components = {
  pageBanner: HomeBanner,
  pageCardContent: HomeContentCard,
  pageOffers: HomeOffers,
  pageShop: HomeShop,
  pageOfferProducts: HomeOfferProducts,
  pageWhoWeAre: HomeWhoWeAre,
  pageGallery: HomeGallery,
  pageTestimonial: HomeTestimonial
}

const component = computed(() => {
  return components[props.componentData?.type]
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
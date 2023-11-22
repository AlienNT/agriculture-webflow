<script setup>

import OfferBanner from "@/components/pageComponents/OfferBanner.vue";
import {computed} from "vue";

const props = defineProps({
  content: {
    type: Object
  }
})

const offersList = computed(() => {
  return props?.content?.list
})
</script>

<template>
  <div class="page-offer">
    <div class="container">
      <ul class="row offer-list">
        <li
            v-for="(offer, key) in offersList"
            :key="offer?._id || key"
            class="col offer-list__item"
        >
          <OfferBanner
              :label="offer?.label"
              :title="offer?.title"
              :color-scheme="offer?.colorScheme"
              :image="offer?.image"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.page-offer {
  padding-top: 175px;
  padding-bottom: 175px;
}

.offer-list {
  display: flex;
  width: 100%;
  justify-content: center;
}

.offer-list__item {
  flex: 1 1 280px;
  max-width: 545px;
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
}
</style>
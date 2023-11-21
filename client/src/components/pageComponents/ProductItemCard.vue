<script setup>
import VPrice from "@/components/siteComponents/VPrice.vue";
import VRate from "@/components/siteComponents/VRate.vue";
import VTitle from "@/components/siteComponents/VTitle.vue";
import VTag from "@/components/siteComponents/VTag.vue";
import VImage from "@/components/siteComponents/VImage.vue";
import {computed, readonly} from "vue";

const props = defineProps({
  cardData: {
    type: Object
  }
})

const tag = computed(() => {
  return props.cardData?.tag
})

const image = computed(() => {
  return props.cardData?.image
})

const title = computed(() => {
  return props.cardData?.title
})

const price = computed(() => {
  return props.cardData?.price
})

const oldPrice = computed(() => {
  return props.cardData?.oldPrice
})

const discount = computed(() => {
  return props.cardData?.discount
})

const rating = computed(() => {
  return props.cardData?.rating
})

const readOnly = computed(() => {
  return props.cardData?.readonly
})

</script>

<template>
  <div class="product-item-card">
    <div class="product-category">
      <VTag :title="tag"/>
    </div>
    <div class="product-image">
      <div class="image-wrapper">
        <VImage
            :src="image"
            :alt="`${title} image`"
            background-mode
        />
      </div>
    </div>
    <div class="product-title">
      <VTitle :value="title"/>
    </div>
    <div class="product-item-card__footer">
      <div class="product-price">
        <VPrice
            :price="price"
            :discount="discount"
            :old-price="oldPrice"
        />
      </div>
      <div class="product-rating">
        <VRate
            :readonly="readOnly"
            :rating="rating"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-item-card {
  border-radius: 30px;
  background: #F9F8F8;
  max-width: 335px;
  padding: 30px;
}

.product-category {
  margin-bottom: 13px;
  width: fit-content;
}

.product-image {
  padding-right: 100%;
  padding-top: 100%;
  width: 0;
  height: 0;
  position: relative;
}

.product-title {
  margin-bottom: 13px;
  font-size: 20px;
  font-weight: 600;
}

.image-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.product-item-card__footer {
  padding-top: 6px;
  border-top: 1px solid #DEDDDD;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
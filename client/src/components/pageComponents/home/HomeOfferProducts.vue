<script setup>
import ProductItemList from "@/components/pageComponents/ProductItemList.vue";
import VCursive from "@/components/siteComponents/VCursive.vue";
import VTitle from "@/components/siteComponents/VTitle.vue";
import VButton from "@/components/siteComponents/VButton.vue";
import {routeTo} from "@/helpers/buttonHelper.js";

defineProps({
  content: {
    type: Object
  }
})
</script>

<template>
  <div class="home-offer-products">
    <div class="container">
      <VCursive
          :value="content?.cursive"
          class="cursive"
      />
      <div class="field-wrapper">
        <VTitle
            :value="content?.title"
            class="home-offer-products__title"
        />
        <VButton
            :label="content?.buttonLabel"
            :style-type="1"
            @on-click="routeTo(content?.buttonRoute)"
        />
      </div>
      <ProductItemList
          :list-data="content?.list"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-offer-products {
  background: map-get($colors, greenishBlue);
  min-height: $viewportHeight;
  padding-top: 100px;
  padding-bottom: 100px;
}

.home-offer-products__title {
  color: white;
  font-size: 50px;
  font-weight: 800;
}

.field-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-bottom: 50px;
}
</style>
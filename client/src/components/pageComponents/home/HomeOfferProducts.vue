<script setup>
import {routeTo} from "@/helpers/buttonHelper.js";
import ProductItemList from "@/components/pageComponents/ProductItemList.vue";
import VCursive from "@/components/siteComponents/VCursive.vue";
import VTitle from "@/components/siteComponents/VTitle.vue";
import VButton from "@/components/siteComponents/VButton.vue";
import PageContentTemplate from "@/components/templates/PageContentTemplate.vue";

defineProps({
  content: {
    type: Object
  }
})
</script>

<template>
  <div class="home-offer-products">
    <PageContentTemplate>
      <template v-slot:cursive>
        <VCursive
            :value="content?.cursive"
            class="cursive"
        />
      </template>
      <template v-slot:title>
        <VTitle
            :value="content?.title"
            class="home-offer-products__title"
        />
      </template>
      <template v-slot:button>
        <VButton
            :label="content?.buttonLabel"
            :style-type="1"
            @on-click="routeTo(content?.buttonRoute)"
        />
      </template>
      <template v-slot:content>
        <ProductItemList
            :list-data="content?.list"
        />
      </template>
    </PageContentTemplate>
  </div>
</template>

<style scoped lang="scss">
.home-offer-products {
  background: map-get($colors, greenishBlue);
  min-height: $viewportHeight;
}

.home-offer-products__title {
  color: white;
}

</style>
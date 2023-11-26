<script setup>
import VTitle from "@/components/siteComponents/VTitle.vue";
import VCursive from "@/components/siteComponents/VCursive.vue";
import VButton from "@/components/siteComponents/VButton.vue";
import ProductItemList from "@/components/pageComponents/ProductItemList.vue";
import PageContentTemplate from "@/components/templates/PageContentTemplate.vue";

defineProps({
  content: {
    type: Object
  }
})

function loadMore() {
  console.log('loading...')
}
</script>

<template>
  <div class="home-shop">
    <PageContentTemplate
        title-row-justify="center"
    >
      <template v-slot:cursive>
        <VCursive
            :value="content?.cursive"
            class="cursive"
        />
      </template>
      <template v-slot:title>
        <VTitle
            :value="content?.title"
            class="title"
        />
      </template>
      <template v-slot:content>
        <ProductItemList
            :list-data="content?.list"
            class="products-list"
        />
        <VButton
            :label="content?.buttonLabel"
            @on-click="loadMore"
            class="button"
        />
      </template>
    </PageContentTemplate>
  </div>
</template>

<style scoped>

.cursive, .title {
  text-align: center;
}

.title {
  margin-bottom: 40px;
}

.products-list {
  margin-bottom: 122px;

}

.button {
  margin: 0 auto;
}
</style>
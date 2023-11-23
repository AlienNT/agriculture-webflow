<script setup>
import VTitle from "@/components/siteComponents/VTitle.vue";
import VCursive from "@/components/siteComponents/VCursive.vue";
import VButton from "@/components/siteComponents/VButton.vue";
import ProductItemList from "@/components/pageComponents/ProductItemList.vue";

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
  <div class="home-shop container">
    <VCursive
        :value="content?.cursive"
        class="cursive"
    />
    <VTitle
        :value="content?.title"
        class="title"
    />
    <ProductItemList
        :list-data="content?.list"
        class="products-list"
    />
    <VButton
        :label="content?.buttonLabel"
        @on-click="loadMore"
        class="button"
    />
  </div>
</template>

<style scoped>
.home-shop {
  padding-top: 176px;
  padding-bottom: 176px;
}

.cursive, .title {
  text-align: center;
}

.cursive {
  margin-bottom: 5px;
}

.title {
  margin-bottom: 40px;
  font-size: 50px;
  font-weight: 800;
}

.products-list {
  margin-bottom: 122px;
  > * {
    flex: 1 1 25%;
  }
}

.button {
  margin: 0 auto;
}
</style>
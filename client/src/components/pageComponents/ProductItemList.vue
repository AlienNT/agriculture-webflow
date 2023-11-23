<script setup>
import ProductItemCard from "@/components/pageComponents/ProductItemCard.vue";

defineProps({
  listData: {
    type: Object
  }
})
</script>

<template>
  <ul class="product-item-list">
    <li
        class="product-item"
        v-for="(item, index) in listData"
        :key="index"
    >
      <ProductItemCard
          :card-data="{...item, readonly: true}"
          class="product-card"
      />
    </li>
  </ul>
</template>

<style scoped>
.product-item-list {
  display: flex;
  flex-wrap: wrap;
}

.product-item {
  padding: 10px;
  flex: 1 1 25%;
}
</style>
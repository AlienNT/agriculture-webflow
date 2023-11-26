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

<style scoped lang="scss">
$listGap: 20px;
$columns: 4;

.product-item-list {
  display: flex;
  flex-wrap: wrap;
  gap: $listGap;
}

.product-item {
  flex: 1 1 calcFlex($columns, $listGap);
  display: flex;
  justify-content: center;
}
</style>
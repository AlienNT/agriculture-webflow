<script setup>
import PageContentListItem from "@/components/pageComponents/PageContentListItem.vue";

defineProps({
  listData: {
    type: Array
  }
})
</script>

<template>
  <ul class="page-content-list">
    <PageContentListItem
        v-for="(item, key) in listData"
        :key="key"
        :item-data="item"
    />
  </ul>
</template>

<style scoped>
.page-content-list {
  display: flex;
  flex-direction: column;

}
</style>
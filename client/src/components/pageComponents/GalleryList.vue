<script setup>
import GalleryListItem from "@/components/pageComponents/GalleryListItem.vue";

defineProps({
  listData: {
    type: Array
  }
})
</script>

<template>
  <ul class="gallery-list">
    <li
        v-for="(item, index) in listData"
        class="gallery-list__li"
        :key="index"
    >
      <GalleryListItem
          :content="item"
      />
    </li>
  </ul>
</template>

<style scoped lang="scss">
$listGap: 42px;

.gallery-list {
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  gap: $listGap;
}

.gallery-list__li {
  flex: 1 1 calcFlex(3, $listGap);
}
</style>
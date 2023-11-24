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

<style scoped>
.gallery-list {
  display: flex;
  flex-wrap: wrap;
  margin-right: -20px;
  margin-left: -20px;
  overflow-x: hidden;
  flex: 1;
}

.gallery-list__li {
  flex: 1 1 calc(100% / 3);
}
</style>
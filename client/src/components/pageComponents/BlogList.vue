<script setup>

import BlogListItem from "@/components/pageComponents/BlogListItem.vue";

defineProps({
  listData: {
    type: Object
  }
})
</script>

<template>
  <ul class="blog-list">
    <li
        v-for="(item, index) in listData"
        :key="item?._id || index"
    >
      <BlogListItem
          :content="item"
      />
    </li>
  </ul>
</template>

<style scoped lang="scss">
$listGap: 46px;
$columns: 3;

.blog-list {
  display: flex;
  flex-wrap: wrap;
  gap: $listGap;

  li {
    flex: 1 1 calc((100% / $columns) - ($listGap / $columns));
    display: flex;
    min-width: 300px;
  }
}
</style>
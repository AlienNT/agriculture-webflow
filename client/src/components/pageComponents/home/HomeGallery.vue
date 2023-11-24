<script setup>
import GalleryList from "@/components/pageComponents/GalleryList.vue";

defineProps({
  content: {
    type: Object
  }
})
</script>

<template>
  <div class="home-gallery">
    <GalleryList
        :list-data="content?.list"
    />
  </div>
</template>

<style scoped>
.home-gallery {
  background: #F1F8F4;
  padding-top: 180px;
  padding-bottom: 180px;
  overflow-x: hidden;
}
</style>
<script setup>

import VImage from "@/components/siteComponents/VImage.vue";
import VTitle from "@/components/siteComponents/VTitle.vue";
import VDescription from "@/components/siteComponents/VDescription.vue";
import {computed} from "vue";

const props = defineProps({
  itemData: {
    type: Object
  }
})

const image = computed(() => {
  return props.itemData?.image
})

const title = computed(() => {
  return props.itemData?.title
})

const description = computed(() => {
  return props.itemData?.description
})
</script>

<template>
  <li class="page-content-list-item">
    <div
        v-if="image"
        class="list-item__icon"
    >
      <VImage
          :src="image"
          class="image"
      />
    </div>
    <div class="list-item__content">
      <VTitle
          v-if="title"
          :value="title"
          class="title"
      />
      <VDescription
          v-if="description"
          :value="description"
          class="description"
      />
    </div>
  </li>
</template>

<style scoped lang="scss">
.page-content-list-item {
  display: flex;
  gap: 19px;
}

.list-item__icon {
  flex: none;
  width: 101px;
  height: 101px;
  border-radius: 20px;
  background: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;

  .image {
    width: 52px;
    height: 52px;
  }
}

.title {
  margin-bottom: 7px;
  font-size: 25px;
  font-weight: 800;
}

</style>
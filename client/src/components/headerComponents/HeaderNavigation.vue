<script setup>
import HeaderNavigationItem from "./HeaderNavigationItem.vue";
import {useNavigation} from "@/composables/useNavigation.js";

const {headerNavigation} = useNavigation()

</script>

<template>
  <nav class="navigation">
    <ul class="navigation-list">
      <HeaderNavigationItem
          v-for="(navItemData, key) in headerNavigation"
          :key="key"
          :link-data="navItemData"
      />
    </ul>
  </nav>
</template>

<style scoped>
.navigation-list {
  display: flex;
  gap: 5px;
  align-items: center;
}
</style>
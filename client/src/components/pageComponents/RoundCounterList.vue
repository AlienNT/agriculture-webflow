<script setup>
import RoundCounter from "@/components/pageComponents/RoundCounter.vue";

defineProps({
  listData: {
    type: Array
  }
})
</script>

<template>
  <ul class="round-counters-list">
    <li
        v-for="(item, index) in listData"
        :key="item?._id || index"
    >
      <RoundCounter
          :value="item?.value"
          :title="item?.title"
      />
    </li>
  </ul>
</template>

<style scoped>
.round-counters-list {
  display: flex;
  gap: 62px;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
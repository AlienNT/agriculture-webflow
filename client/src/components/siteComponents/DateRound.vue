<script setup>
import {computed} from "vue";
import {dateWithShortMonth} from "@/helpers/index.js";

const props = defineProps({
  date: {
    type: [Date, Number]
  }
})

const formattedDate = computed(() => {
  return dateWithShortMonth(props.date)
})
</script>

<template>
  <div class="round-date">
    <div class="date-wrapper">
      <div class="day">
        {{ formattedDate?.day }}
      </div>
      <div class="month">
        {{ formattedDate?.month }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.round-date {
  width: 82px;
  height: 82px;
  background: #ffffff;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  position: relative;
}

.date-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #274C5B;
  font-family: $mainFont;
  font-size: 25px;
  font-weight: 800;
  text-align: center;
}
</style>
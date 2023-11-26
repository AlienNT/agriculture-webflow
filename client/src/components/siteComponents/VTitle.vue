<script setup>
defineProps({
  value: {
    type: String
  },
})
</script>

<template>
  <div class="title">
    {{ value }}
  </div>
</template>

<style scoped lang="scss">
$color: map-get($colors, greenishBlue);

.title {
  color: $color;
  font-family: $mainFont;
  font-style: normal;
  line-height: normal;
  font-size: 50px;
  font-weight: 800;
}
</style>
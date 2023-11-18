<script setup>
defineProps({
  value: {
    type: String
  }
})
</script>

<template>
  <div class="cursive">{{ value }}</div>
</template>

<style scoped lang="scss">
$color: map-get($colors, greenCrayola);

.cursive {
  color: $color;
  font-family: $cursiveFont;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
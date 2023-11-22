<script setup>
defineProps({
  value: {
    type: String
  }
})
</script>

<template>
  <div class="description">
    {{ value }}
  </div>
</template>

<style scoped lang="scss">
$color: map-get($colors, grayishBlue);

.description {
  color: $color;
  font-family: $secondFont;
  font-style: normal;
  line-height: 165.4%;
}
</style>
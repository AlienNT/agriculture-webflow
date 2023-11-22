<script setup>
defineProps({
  title: {
    type: String
  }
})
</script>

<template>
  <div
      v-if="title"
      class="tag"
  >
    {{ title }}
  </div>
</template>

<style scoped lang="scss">
$bgColor: map-get($colors, greenishBlue);
$color: #fff;

.tag {
  display: flex;
  padding: 5px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: $bgColor;
  color: $color;
  text-align: center;
  font-family: $secondFont;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
</style>
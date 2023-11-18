<script setup>
import VTitle from "@/components/siteComponents/VTitle.vue";
import VCursive from "@/components/siteComponents/VCursive.vue";

defineProps({
  title: {
    type: String
  },
  label: {
    type: String
  },
  image: {
    type: String,
    default: null
  },
  colorScheme: {
    type: String,
    default: 'dark'
  },
  backgroundImage: {
    type: String
  }
})

</script>

<template>
  <div
      class="offer-banner"
      :class="colorScheme"
      :style="image ? `background-image: url(${image});` : null"
  >
    <div class="cursive">
      <VCursive
          :value="label"
      />
    </div>
    <div class="title">
      <VTitle
          :value="title"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.offer-banner {
  width: 100%;
  border-radius: 30px;
  background-color: map-get($colors, gainsborough);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 60px;

  &.dark {
    background-color: map-get($colors, grayishBlue);
  }
}

.title {
  font-size: 40px;
  font-style: normal;
  font-weight: 800;
}
.cursive {
  margin-bottom: 5px;
}

.title, .cursive {
  .dark & {
    color: map-get($colors, light);

  }
}
</style>
<script setup>
import VTitle from "@/components/siteComponents/VTitle.vue";
import VDescription from "@/components/siteComponents/VDescription.vue";

defineProps({
  value: {
    type: String,
    default: null
  },
  title: {
    type: String,
    default: null
  }
})
</script>

<template>
  <div class="round-counter">
    <VTitle
        :value="value"
        class="round-counter__value"
    />
    <VDescription
        :value="title"
        class="round-counter__title"
    />
  </div>
</template>

<style scoped lang="scss">
.round-counter {
  width: 211px;
  height: 211px;
  background: url("../../../public/images/pages_design/svg/Chart.svg") no-repeat center / contain;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.round-counter__value {
  font-size: 50px;
  font-weight: 800;
}

.round-counter__title {
  font-size: 18px;
  font-weight: 600;
  line-height: 165.4%;
  color: map-get($colors, greenishBlue);
}
</style>
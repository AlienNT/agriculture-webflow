<script setup>
import {computed} from "vue";
import {getWithDiscount} from "@/helpers/index.js";

const props = defineProps({
  price: {
    type: Number,
    default: null
  },
  oldPrice: {
    type: Number,
    default: null,
  },
  discount: {
    type: Number,
    default: null
  },
  showOld: {
    type: Boolean,
    default: true,
  },
  showCurrent: {
    type: Boolean,
    default: true
  }
})

const currentPrice = computed(() => {
  return getWithDiscount(props.price, props.discount)
})

const oldPrice = computed(() => {
  return props.oldPrice || props.discount ? props.price : null
})
</script>

<template>
<span class="price">
  <span
      v-if="showOld && oldPrice"
      class="price__old"
  >
    {{ oldPrice }}
  </span>
  <span
      v-if="showCurrent && currentPrice"
      class="price__current"
  >
    {{ currentPrice }}
  </span>
</span>
</template>

<style scoped lang="scss">
.price {
  display: flex;
  align-items: center;
  gap: 8px;
}

.price__old,
.price__current {
  color: map-get($colors, greenishBlue);
  text-align: center;
  font-family: $secondFont;
  font-style: normal;
  line-height: normal;

  &:before {
    content: '$';
    display: inline;
  }
}

.price__old {
  color: #B8B8B8;
  font-size: 15px;
  font-weight: 600;
  text-decoration: line-through;
}

.price__current {
  font-size: 18px;
  font-weight: 700;
}
</style>
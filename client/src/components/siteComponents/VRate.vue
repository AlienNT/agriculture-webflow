<script setup>
import {ref, watch} from "vue";
import {numberToArray} from "@/helpers/index.js";

const props = defineProps({
  rating: {
    type: Number,
    default: null
  },
  starAmount: {
    type: Number,
    default: 5
  },
  disabled: {
    type: Boolean,
    default: null
  },
  readonly: {
    type: Boolean,
    default: null
  }
})

const emit = defineEmits([
  'onRate'
])

const starItemArray = ref([])

watch(() => props.starAmount, (value) => {
  starItemArray.value = numberToArray(value)
}, {
  immediate: true
})

function setRating(val) {
  if (props.disabled || props.readonly) return

  emit('onRate', val !== props?.rating ? val : null)
}

</script>

<template>
  <ul class="rate">
    <li
        v-for="item in starItemArray"
        class="rate-item"
        :key="item"
    >
      <label
          :class="item <= rating ? 'selected': '' "
          :disabled="props.disabled"
          :readonly="props.readonly"
      >
        <input
            type="radio"
            name="rate"
            :value="item"
            @click="setRating(item)"
        >
      </label>
    </li>
  </ul>
</template>

<style scoped lang="scss">
$starColor: #FFA858;
.rate {
  display: flex;
  flex-direction: row-reverse;
  width: fit-content;
}

.rate-item:hover, .rate-item:hover ~ .rate-item {
  label {
    &:not([readonly]) {
      background-color: darken($starColor, 15%);
      cursor: pointer;
    }
  }
}

label {
  mask: url("../../../public/images/svg/star.svg") no-repeat center / contain;
  width: 19px;
  height: 19px;
  background-color: lightgray;
  display: block;
  &[disabled=true] {
    opacity: 0.5;
  }
}

input[type=radio] {
  display: none;
}

.selected {
  background-color: $starColor;
}

</style>
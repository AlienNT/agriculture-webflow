<script setup>
import {computed} from "vue";
import {buttonClasses, buttonStyle} from "@/helpers/buttonHelper.js";

const props = defineProps({
  disabled: {
    type: Boolean,
    default: null
  },
  label: {
    type: String,
    default: 'Button'
  },
  type: {
    type: String,
    default: 'button'
  },
  styleType: {
    type: Number,
    default: 0
  }
})

defineEmits([
  'onClick'
])


const styleClass = computed(() => {
  return buttonClasses[props.styleType] || buttonClasses[buttonStyle.BLUE]
})
</script>

<template>
  <button
      class="button"
      :type="type"
      :class="styleClass"
      :disabled="disabled"
      @click="$emit('onClick')"
  >
    {{ label }}
  </button>
</template>

<style scoped lang="scss">
.button {
  display: flex;
  padding: 28px 39px 29px 39px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  gap: 10px;
  font-family: $mainFont;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;

  &:after {
    content: '';
    display: block;
    background: url("/images/icon/Aerrow.svg") no-repeat center / contain;
    width: 19px;
    height: 19px;
  }
}

.blue, .paginate {
  background: map-get($colors, greenishBlue);
  color: map-get($colors, light);
}

.yellow, .white {
  color: map-get($colors, greenishBlue);
}

.yellow {
  background: map-get($colors, buffaloLeather);
}

.white {
  background: map-get($colors, light);
  border: 1px solid map-get($colors, greenishBlue);
}

.paginate {
  background: map-get($colors, greenishBlue);

  &:after {
    display: none;
  }
}
</style>
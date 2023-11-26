<script setup>
import {computed, useSlots} from "vue";

const props = defineProps({
  titleRowJustify: {
    type: String,
    default: 'space-between'
  }
})

const isButton = computed(() => {
  return !!useSlots()?.button
})

const style = computed(() => {
  return props.titleRowJustify && `justify-content: ${props.titleRowJustify}`
})

</script>
<template>
  <div class="template">
    <div class="container template__container">
      <div
          class="row template__title-row"
          :style="style"
      >
        <div class="col template__col">
          <slot name="cursive"/>
          <slot name="title"/>
        </div>
        <div
            v-if="isButton"
            class="col template__col"
        >
          <slot name="button"/>
        </div>
      </div>
      <slot name="content"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
$verticalPadding: 170px;

.template {
  padding-top: $verticalPadding;
  padding-bottom: $verticalPadding;
}

.template__title-row {
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 45px;
  gap: 20px;
}

.template__col {
  flex: 0 0 fit-content;

  &:first-of-type {
    max-width: 720px;
  }
}
</style>
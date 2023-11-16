<script setup>
import FieldTemplate from "@/components/fields/FieldTemplate.vue";

defineProps({
  fieldTitle: {
    type: String,
    default: null
  },
  fieldValue: {
    type: [String, Number],
    default: null
  }
})
</script>

<template>
  <FieldTemplate>
    <template v-slot:title>
      <span>{{ fieldTitle }}</span>
    </template>
    <template v-slot:value>
      <a :href="`tel:${fieldValue}`">{{ fieldValue }}</a>
    </template>
  </FieldTemplate>
</template>

<style scoped>

</style>
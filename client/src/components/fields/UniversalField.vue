<script setup>
import {computed} from "vue";
import LinkField from "@/components/fields/LinkField.vue";
import TextField from "@/components/fields/TextField.vue";
import PhoneField from "@/components/fields/PhoneField.vue";
import EmailField from "@/components/fields/EmailField.vue";

const props = defineProps({
  fieldData: {
    type: Object
  }
})

const fieldType = computed(() => {
  return props.fieldData?.type
})

const fieldTitle = computed(() => {
  return props.fieldData?.title
})

const fieldValue = computed(() => {
  return props.fieldData?.value
})

const component = computed(() => {
  switch (fieldType.value) {
    case 'link':
      return LinkField;
    case 'email':
      return EmailField;
    case 'phone':
      return PhoneField;
    case 'text':
      return TextField;
    default:
      return TextField
  }
})
</script>

<template>
  <div class="universal-field">
    <component
        :is="component"
        :field-title="fieldTitle"
        :field-value="fieldValue"
    />
  </div>
</template>

<style scoped>

</style>
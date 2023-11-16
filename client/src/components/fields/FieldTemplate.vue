<script setup>

</script>

<template>
  <div class="field-template">
    <div class="field-title">
      <slot name="title"/>
    </div>
    <div class="field-value">
      <slot name="value"/>
    </div>
  </div>
</template>

<style lang="scss">
$fontColor: map-get($colors, grayishBlue);

.field-title,
.field-value, {
  color: $fontColor;
  text-align: right;
  font-family: $secondFont;
  font-size: 18px;
  font-style: normal;
  line-height: 165%;

  > * {
    color: $fontColor;
  }

  a {
    &:hover {
      color: lighten($fontColor, 20%);
    }
  }
}

.field-title {
  font-weight: 700;
}

.field-value {
  font-weight: 400;
}
</style>
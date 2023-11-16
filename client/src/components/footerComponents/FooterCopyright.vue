<template>
  <div class="copyright">
    Copyright © <a href="#">Organick</a> | Designed by <a href="#">VictorFlow</a> Templates - Powered by <a
      href="#">Webflow</a>
  </div>
</template>

<style scoped lang="scss">
$fontColor: map-get($colors, grayishBlue);

.copyright {
  color: $fontColor;
  text-align: center;
  font-family: $secondFont;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 165.4%;

  a {
    color: $fontColor;
    font-weight: 700;
  }
}
</style>
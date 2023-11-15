<script setup>
import useCart from "../../composables/useCart.js";

const {cartCounter} = useCart()
</script>

<template>
  <button class="cart-button">
    <span class="cart-counter">
      Cart ({{cartCounter}})
    </span>
  </button>
</template>

<style scoped lang="scss">
@import "../../assets/css/variables";
.cart-button {
  background: none;
  cursor: pointer;
  border-radius: 33px;
  border: 1px solid #E0E0E0;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 5px 15px 5px 5px;
  color: #274C5B;
  font-family: $mainFont;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  &:before {
    content: '';
    display: block;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: url("../../../public/images/icon/Cart Icon.svg");
  }
}
</style>
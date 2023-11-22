<script setup>
import {computed} from "vue";
import Instagram from "@/components/icons/Instagram.vue";
import Twitter from "@/components/icons/Twitter.vue";
import Facebook from "@/components/icons/Facebook.vue";
import Pinterest from "@/components/icons/Pinterest.vue";

const props = defineProps({
  socialItemData: {
    type: Object
  }
})

const title = computed(() => {
  return props.socialItemData?.title
})

const type = computed(() => {
  return props.socialItemData?.type
})

const link = computed(() => {
  return props.socialItemData?.link
})

const iconComponent = computed(() => {
  switch (type.value) {
    case 'instagram':
      return Instagram;
    case 'facebook':
      return Facebook;
    case 'twitter':
      return Twitter;
    case 'pinterest':
      return Pinterest;
  }
})
</script>

<template>
  <a
      class="footer-social-item"
      :href="link"
  >
    <span class="social-icon">
       <component
           :is="iconComponent"
       />
    </span>
  </a>
</template>

<style scoped lang="scss">
.footer-social-item {
  &:hover {
    .social-icon {
      transform: translateY(-10%);
    }
  }
}
.social-icon {
  display: block;
  transition: .2s ease;
}
</style>
<script setup>
import VImage from "@/components/siteComponents/VImage.vue";
import VRate from "@/components/siteComponents/VRate.vue";
import VDescription from "@/components/siteComponents/VDescription.vue";
import VTitle from "@/components/siteComponents/VTitle.vue";

defineProps({
  content: {
    type: Object
  }
})
</script>

<template>
  <div class="page-review">
    <div class="page-review__image">
      <VImage
          :src="content?.image"
          class="image"
      />
    </div>
    <VRate
        :rating="content?.rating"
        readonly
        class="page-review__rating"
    />
    <VDescription
        :value="content?.description"
        class="page-review__description"
    />
    <VTitle
        :value="content?.userName"
        class="page-review__user-name"
    />
    <VDescription
        :value="content?.role"
        class="page-review__role"
    />
  </div>
</template>

<style scoped>
.page-review {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.page-review__image {
  margin-bottom: 15px;
  max-width: 125px;
  border-radius: 50%;
  overflow: hidden;
}

.page-review__rating {
  margin-bottom: 25px;
}

.page-review__description {
  margin-bottom: 20px;
  max-width: 780px;
}

.page-review__user-name {
  font-size: 25px;
}

.page-review__role {
  font-size: 15px;
}
</style>
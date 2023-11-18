<script setup>

import PageTemplate from "@/components/templates/PageTemplate.vue";
import VTitle from "@/components/siteComponents/VTitle.vue";
import VButton from "@/components/siteComponents/VButton.vue";
import VCursive from "@/components/siteComponents/VCursive.vue";
import OfferBanner from "@/components/pageComponents/OfferBanner.vue";
import {useHomepageOffers} from "@/composables/useHomepageOffers.js";

const {offers} = useHomepageOffers()
</script>

<template>
  <div class="page home">
    <PageTemplate
        max-height=""
    >
      <template v-slot:bannerContent>
        <div class="container page-banner-content">
          <div class="content-wrapper">
            <div class="design-text">
              <VCursive
                  value="100% Natural Food"
              />
            </div>
            <div class="content-title">
              <VTitle
                  value="Choose the best healthier way of life"
              />
            </div>
            <div class="content-button">
              <VButton
                  label="Explore Now"
                  :style-type="1"
              />
            </div>
          </div>
        </div>
      </template>
      <template v-slot:content>
        <div class="page-content">
          <div class="page-offer">
            <div class="container">
              <ul class="row offer-list">
                <li
                    v-for="(offer, key) in offers"
                    :key="offer?._id || key"
                    class="col offer-list__item"
                >
                  <OfferBanner
                      :label="offer?.label"
                      :title="offer?.title"
                      :color-scheme="offer?.colorScheme"
                      :image="offer?.image"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </template>
    </PageTemplate>
  </div>
</template>

<style scoped>
.page-banner-content {
  text-align: left;
}

.content-wrapper {
  max-width: 530px;
  margin-right: auto;
}

.content-title {
  font-size: 70px;
  font-weight: 800;
  margin-bottom: 25px;
}

.design-text {
  color: #68A47F;
  font-family: Yellowtail, sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 6px;
}

.page-offer {
  padding-top: 175px;
  padding-bottom: 175px;
}

.offer-list {
  display: flex;
  width: 100%;
  justify-content: center;
}

.offer-list__item {
  flex: 1 1 280px;
  max-width: 545px;
  padding-top: 15px;
  padding-bottom: 15px;
  display: flex;
}
</style>
<template>
  <div class="main__banner mainBanner">
    <Splide :options="mainBanner" ref="main">
      <SplideSlide v-if="!media.$md">
        <div class="mainBanner__wrapper" :style="`height: ${height}px`" ref="content">
          <div class="mainBanner__item p" v-for="(item, i) in slider" :key="i" :style="`background-image: url(${item.image})`">
            <div class="mainBanner__bg">
              <h2>{{item[`product_type_${$i18n.locale}`]}}</h2>
              <p class="body bannerBtn" @click="useFilters(item.link, 'product_type_uz', item.product_type_uz)" :data-back="$t('readMore')" :data-front="$t('home.productsType', {number: item.count})"></p>
            </div>
          </div>
        </div>
      </SplideSlide>
      <template v-else>
        <SplideSlide v-for="(item, i) in slider" :key="i">
          <div class="mainBanner__wrapper" :style="media.$sm ? `height: 400px` : `height: ${height}px`" ref="content">
            <div class="mainBanner__item p" :style="`background-image: url(${item.image})`">
              <div class="mainBanner__bg">
                <h2>{{item[`product_type_${$i18n.locale}`]}}</h2>
                <p class="body bannerBtn" @click="useFilters(item.link, 'product_type_uz', item.product_type_uz)" :data-back="$t('readMore')" :data-front="$t('home.productsType', {number: item.count})"></p>
              </div>
            </div>
          </div>
        </SplideSlide>
      </template>
      <SplideSlide>
        <div class="mainBanner__wrapper" :style="media.$sm ? `height: 400px` : `height: ${height}px`" ref="content">
          <div class="mainBanner__one" :style="`background-image: url(${slider2.image})`">
<!--            <img :src="slider2.image" alt="image lorem">-->
          </div>
        </div>
      </SplideSlide>
    </Splide>
  </div>
</template>

<script>
import {Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import {useCarousel} from "../../hooks/ui/useCarousel";
import useImageHeight from "../../hooks/ui/useImageHeight";
import {ref} from "vue";
import {useMedia} from "../../hooks/ui/useMedia";
import {slider, slider2} from "../../hooks/about/useAbout";
import useFilters from "../../hooks/product/useFilters";
export default {
  name: "mainBanner",
  components: {Splide, SplideSlide},
  setup() {
    const {mainBanner} = useCarousel()
    const {media} = useMedia()
    const content = ref(null)
    const {height} = useImageHeight(content)
    return {media, height, mainBanner, content, slider, useFilters, slider2}
  }
}
</script>

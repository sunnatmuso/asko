<template>
  <div class="carouselWrapper" :class="{playNone: data.length <= 1}">
    <Splide :options="options" ref="main">
      <SplideSlide v-for="(slide, index) in data" :key="index">
        <slot :slide="slide" :index="index"/>
      </SplideSlide>
    </Splide>
    <Splide v-if="thumbBoolean && data.length >= 2" :options="thumbsOptions" ref="thumbs">
      <SplideSlide v-for="(slide, index) in data" :key="index">
        <img class="content__banner" :src="slide.thumbnail_150" :alt="index">
      </SplideSlide>
    </Splide>
  </div>
</template>

<script>
import {Splide, SplideSlide } from '@splidejs/vue-splide';
import {defineComponent, onMounted} from 'vue';
import '@splidejs/splide/dist/css/splide.min.css';
import { useCarousel } from "../../hooks/ui/useCarousel";
export default defineComponent( {
  name: 'ThumbnailsExample',
  props: {
    data: {},
    options: {},
    thumbBoolean: {
      type: Boolean,
      default: false
    }
  },
  components: {Splide, SplideSlide},
  setup() {
    const {main, thumbs, thumbsOptions} = useCarousel()

    onMounted( () => {
      const thumbsSplide = thumbs.value?.splide;
      if ( thumbsSplide ) {
        main.value?.sync( thumbsSplide );
      }
    })
    return {main, thumbs, thumbsOptions}
  },
} );
</script>

<template>
  <div class="mainAbout" :class="{playNone: testimonials.length <= 1}">
    <div class="container">
      <div class="mainAbout__title">
        <Splide :options="nameTest" ref="nameTestimonials" class="nameTestimonials">
          <SplideSlide v-for="(name, i) in testimonials" :key="i">
            <h1>{{name[`name_${$i18n.locale}`]}}</h1>
            <p class="body">{{name[`company_${$i18n.locale}`]}}</p>
          </SplideSlide>
        </Splide>
      </div>
      <div class="mainAbout__wrapper">
        <Splide :options="thumbOptions" ref="mains" class="mains">
          <SplideSlide v-for="(text, i) in testimonials" :key="i" v-html="text[`desc_${$i18n.locale}`]"></SplideSlide>
        </Splide>
        <Splide :options="thumbsOptions" ref="mainThumbs" class="mainThumbs">
          <SplideSlide v-for="(thumb, i) in testimonials" :key="i">
            <div class="wrap">
              <h1>{{thumb.letter}}</h1>
              <img :src="thumb.image" alt="image">
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </div>
</template>

<script>
import {Splide, SplideSlide } from '@splidejs/vue-splide';
import {defineComponent, onMounted} from 'vue';
import '@splidejs/splide/dist/css/splide.min.css';
import { useCarousel } from "../../hooks/ui/useCarousel";
import {testimonials} from "../../hooks/about/useAbout";

export default defineComponent( {
  name: 'mainAbout',
  components: {Splide, SplideSlide},
  setup() {
    const {mains, mainThumbs, thumbsOptions, thumbOptions, nameTest, nameTestimonials} = useCarousel()

    onMounted( () => {
      const thumbsSplide = mainThumbs.value?.splide;
      if ( thumbsSplide ) {
        mains.value?.sync( thumbsSplide );
        nameTestimonials.value?.sync( thumbsSplide )
      }
    })
    return {mainThumbs, mains, thumbsOptions, thumbOptions, testimonials, nameTest, nameTestimonials}
  },
} );
</script>

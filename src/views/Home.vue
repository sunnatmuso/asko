<template>
  <div class="main">
    <MainBanner/>
    <div class="bgWrapMain">
      <section class="main__specialOffers main__title">
        <CardWrapper type="container specialOffers" :title="$t('home.moreSell')" :h1="$t('home.specialOffers')">
          <template v-for="(item, i) in products.slice(0, 12)" :key="i">
            <Card :data="item"/>
          </template>
        </CardWrapper>
      </section>
      <Images v-if="banner" :image="banner.image" type="mainBanner container"/>
      <Parallax v-if="!media.$lg" name="bgWrapMain__leftBottom" :image="require('../assets/image/bg/image18.webp')"/>
      <Parallax name="bgWrapMain__image1" :image="require('../assets/image/bg/image1.webp')"/>
      <Parallax name="bgWrapMain__image12" :image="require('../assets/image/bg/image12.webp')"/>
      <Parallax name="bgWrapMain__image13" :image="require('../assets/image/bg/image13.webp')"/>
    </div>
    <section class="main__title cardsCarousel">
      <CardWrapper type="container specialOffers" :title="$t('home.cardsCarouselTitle')" :h1="$t('home.cardsCarouselH1')">
        <Carousel :options="cards" :data="newProducts" v-slot:default="item">
          <Card :data="item.slide"/>
        </Carousel>
      </CardWrapper>
    </section>
    <MainAbout/>
    <section class="main__title cardsCarousel main__brands">
      <CardWrapper type="container specialOffers" :title="$t('home.mainBrandsTitle')" :h1="$t('home.mainBrandsH1')">
        <Carousel :options="brands" :data="brand" v-slot:default="item">
          <Brands :img="item.slide.logos"/>
        </Carousel>
      </CardWrapper>
    </section>
  </div>
</template>

<script>
import {useCarousel} from "../hooks/ui/useCarousel";
import MainBanner from "../components/main/mainBanner";
import CardWrapper from "../components/ui/cardWrapper";
import Card from "../components/ui/card";
import Carousel from "../components/ui/carousel";
import Brands from "../components/ui/Brands";
import MainAbout from "../components/main/mainAbout";
import Images from "../components/ui/Images";
import Parallax from "../components/ui/Parallax";
import {useMedia} from "../hooks/ui/useMedia";
import {brand, products, newProducts, banner} from "../hooks/about/useAbout";

export default {
  name: 'Home',
  components: {Parallax, Images, MainAbout, Brands, Card, CardWrapper, MainBanner, Carousel},
  setup(){
    const {media} = useMedia()
    const {mainBanner, cards, brands} = useCarousel()
    return {media, mainBanner, cards, brands, brand, products, newProducts, banner}
  }
}
</script>

<template>
  <div class="diska">
    <TopBanner :h2="$t('home.diska')" :body="$t('home.productsType', {number: slider[1].count})" type="diska"/>
    <div class="Diska">
      <Breadcrumbs :title="$t('diska')"/>
      <Filter/>
      <Parallax v-if="!media.$lg" name="Diska__leftBottom" :image="require('../assets/image/bg/diskaLeft.webp')"/>
      <Parallax name="bgWrapMain__image1 diskaRight" :image="require('../assets/image/bg/image31.webp')"/>
      <Parallax name="bgWrapMain__image12" :image="require('../assets/image/bg/image32.webp')"/>
      <Parallax name="bgWrapMain__image13" :image="require('../assets/image/bg/image33.webp')"/>
    </div>
    <Images type="diskaDown container" :image="require('../assets/image/downBanner/diska.webp')"/>
  </div>
</template>
<script>
import TopBanner from "../components/ui/topBanner";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import Filter from "../components/ui/Filter";
import Images from "../components/ui/Images";
import Parallax from "../components/ui/Parallax";
import {useMedia} from "../hooks/ui/useMedia";
import {slider} from "../hooks/about/useAbout";
export default {
  components: {Parallax, Images, Filter, Breadcrumbs, TopBanner},
  setup(){
    const { media } = useMedia()
    return { media, slider }
  }
}
</script>

<template>
  <div class="shina">
    <TopBanner :h2="$t('home.shina')" :body="$t('home.productsType', {number: slider[2].count})" type="shina"/>
    <div class="bgWrapMain">
      <Breadcrumbs :title="$t('shina')"/>
      <Filter/>
      <Parallax v-if="!media.$lg" name="bgWrapMain__leftBottom" :image="require('../assets/image/bg/image18.webp')"/>
      <Parallax name="bgWrapMain__image1" :image="require('../assets/image/bg/image1.webp')"/>
      <Parallax v-if="!media.$lg" name="bgWrapMain__image12" :image="require('../assets/image/bg/image12.webp')"/>
      <Parallax name="bgWrapMain__image13" :image="require('../assets/image/bg/image13.webp')"/>
    </div>
    <Images type="shinaDown container" :image="require('../assets/image/downBanner/image 24.webp')"/>
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

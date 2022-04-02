<template>
  <div class="diska">
    <TopBanner :h2="$t('home.akkumlyator')" :body="$t('home.productsType', {number: slider[0].count})" type="akkumlyator"/>
    <div class="Akkumulyator">
      <Breadcrumbs :title="$t('akkumulyator')"/>
      <Filter/>
      <Parallax v-if="!media.$lg" name="Diska__leftBottom" :image="require('../assets/image/bg/akkumlyatorLeft.webp')"/>
      <Parallax name="bgWrapMain__image1 akkTor" :image="require('../assets/image/bg/112.webp')"/>
      <Parallax name="bgWrapMain__image12" :image="require('../assets/image/bg/113.webp')"/>
      <Parallax name="bgWrapMain__image13" :image="require('../assets/image/bg/114.webp')"/>
    </div>
    <Images type="akkumlyatorDown container" :image="require('../assets/image/downBanner/Frame 19.webp')"/>
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

<template>
  <div class="company">
    <TopBanner :h2="$t('home.companyAbout')" type="company" body="ASKO"/>
    <Breadcrumbs :title="$t('companyAbout')"/>
    <Images type="companyTop container" :image="require('../assets/image/company/Rectangle25.webp')"/>
    <NumberCompany :data="about"/>
    <About :data="about"/>
  </div>
</template>

<script>
import TopBanner from "../components/ui/topBanner";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import Images from "../components/ui/Images";
import NumberCompany from "../components/company/NumberCompany";
import About from "../components/company/About";
import {about} from "../hooks/about/useAbout";
export default {
  name: "Company",
  components: {About, NumberCompany, Breadcrumbs, TopBanner, Images},
  setup(){
    return { about }
  }
}
</script>

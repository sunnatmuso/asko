<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <div class="footer__logo">
          <img src="../../assets/image/ASKO2.webp" alt="logo">
        </div>
        <p class="paragraph">
          {{contacts[`about_logo_${$i18n.locale}`]}}
<!--          <span class="footerText">ASKO</span>-->
        </p>
      </div>
      <div class="footer_down">
        <div class="footer__item">
          <p class="inter">{{$t('socialMedia')}}</p>
          <Social type="red"/>
        </div>
        <div class="footer__item">
          <p class="inter">{{$t('contact')}}</p>
          <div class="footer__number">
            <SvgIcon icon-class="phone" wh="24"/>
            <a :href="`tel:${contacts.phone1}`" class="body_2">{{contacts.phone1}}</a>
          </div>
          <div class="footer__number">
            <SvgIcon icon-class="phone" wh="24"/>
            <a :href="`tel:${contacts.phone2}`" class="body_2">{{contacts.phone2}}</a>
          </div>
        </div>
        <div class="footer__item">
          <p class="inter">{{$t('addressMarket')}}</p>
          <div class="footer__location">
            <SvgIcon icon-class="location" class-name="location" height="24" width="24"/>
            <p class="body_2">{{contacts.address[`address_${$i18n.locale}`]}}</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <div class="allReserved">
    <p class="small" v-html="$t('allReserved')"></p>
  </div>
</template>

<script>
import Social from "../ui/social";
import SvgIcon from "../ui/SvgIcon";
import {contacts} from "../../hooks/about/useAbout";
export default {
  name: "Footer",
  components: {SvgIcon, Social},
  setup(){
    return {contacts}
  }
}
</script>

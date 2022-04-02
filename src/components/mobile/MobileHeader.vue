<template>
  <div class="mobileHeader">
    <div class="container">
      <div class="mobileHeader__content">
        <div class="mobileHeader__logo" @click="$router.push('/')">
          <img src="../../assets/image/asko.svg" alt="logo image">
        </div>
        <div class="mobileHeader__right">
          <div class="mobileHeader__searchMobile" v-if="!searchMobile" @click="searchMobile = !searchMobile">
            <SvgIcon icon-class="search" wh="18" class-name="searchMobile"/>
          </div>
          <HeaderSearch v-if="searchMobile" :icon="searchMobile" @close="searchMobile = false"/>
          <div class="menu" :class="{open: burger}" @click="burger = !burger">
            <div class="icon"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <transition name="slide-right">
   <MenuBurger v-if="burger" :burger="burger" @close="burger = false"/>
  </transition>
</template>

<script>
import HeaderSearch from "../header/headerSearch";
import MenuBurger from "./menuBurger";
import SvgIcon from "../ui/SvgIcon";
import {
  ref,
  watch
} from "vue";
import {useScrollLock} from "../../hooks/ui/useScrollLock";
export default {
  name: "MobileHeader",
  components: {MenuBurger, SvgIcon,  HeaderSearch},
  setup(){
    const burger = ref(false)
    watch(burger, () => useScrollLock(burger.value))

    const searchMobile = ref(false)
    return {searchMobile, burger}
  }
}
</script>

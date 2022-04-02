<template>
  <div class="menuBurger">
    <div class="menuBurger__top">
      <VSelect :value="data.value" :data="data.language" @changeValue="selectLocaleChange"/>
      <div class="menu" :class="{open: burger}" @click="$emit('close')">
        <div class="icon"></div>
      </div>
    </div>
      <div class="menuBurger__content" v-if="burger"  @click="$emit('close')">
        <router-link to="/">{{$t('home.main')}}</router-link>
        <router-link :to="{path: '/shina', query: {product_type_uz: 'Shinalar'}}">{{$t('home.shina')}}</router-link>
        <router-link :to="{path: '/diska', query: {product_type_uz: 'Disklar'}}">{{$t('home.diska')}}</router-link>
        <router-link :to="{path: '/akkumlyator', query: {product_type_uz: 'Akkamulyator'}}">{{$t('home.akkumlyator')}}</router-link>
        <router-link to="/locationShops">{{$t('home.location')}}</router-link>
        <router-link to="/company">{{$t('home.companyAbout')}}</router-link>
        <router-link to="/contact">{{$t('home.contact')}}</router-link>
<!--        <a href="tel:+998977000707">+998 97 700 07 07</a>-->
        <Social type="red"/>
      </div>
  </div>
</template>

<script>
import {select} from "../../hooks/ui/useSelect";
import {useI18n} from "vue-i18n";
import VSelect from "../ui/VSelect";
import Social from "../ui/social";
export default {
  name: "menuBurger",
  components: {Social, VSelect},
  props: {
    burger: {
      type: Boolean,
      default: false
    }
  },
  setup(){
    const {data} = select()
    const {locale} = useI18n()
    const selectLocaleChange = (option) => {
      localStorage.setItem("language", option.value);
      localStorage.setItem("text", option.text);
      data.value = option.text
      locale.value = option.value
    }
    return { data, selectLocaleChange }
  }
}
</script>

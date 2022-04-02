<template>
  <div class="header__down">
    <div class="container">
      <div class="headerDown">
        <div class="headerDown__logo p" @click="$router.push('/')">
          <img src="../../assets/image/ASKO2.webp" alt="logo webp">
        </div>
        <div class="headerDown__right body">
          <router-link to="/">{{$t('home.main')}}</router-link>
          <div class="headerDown__products">
            <p class="p" @mouseenter="products = true" @mouseleave="products = false">
              {{$t('home.products')}}
              <SvgIcon icon-class="down" wh="18"/>
            </p>
            <div class="headerDown__products-link" v-if="products" @mouseenter="products = true" @mouseleave="products = false">
              <router-link :to="{path: '/shina', query: {product_type_uz: 'Shinalar'}}">{{$t('home.shina')}}</router-link>
              <router-link :to="{path: '/diska', query: {product_type_uz: 'Disklar'}}">{{$t('home.diska')}}</router-link>
              <router-link :to="{path: '/akkumlyator', query: {product_type_uz: 'Akkamulyator'}}">{{$t('home.akkumlyator')}}</router-link>
            </div>
          </div>
          <router-link to="/locationShops">{{$t('home.location')}}</router-link>
          <router-link to="/company">{{$t('home.companyAbout')}}</router-link>
          <router-link to="/contact">{{$t('home.contact')}}</router-link>
<!--          <a href="tel:+998977000707">+998 97 700 07 07</a>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import SvgIcon from "../ui/SvgIcon";

export default {
  name: "headerDown",
  components: {SvgIcon},
  setup(){
    const products = ref(false)
    return { products }
  }
}
</script>

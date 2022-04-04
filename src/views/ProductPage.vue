<template>
  <Loader class="product__loader" loader12="1" v-if="LoaderInfo"/>
  <div v-else-if="productInfo" class="product">
      <Breadcrumbs :title="productInfo[`name_${$i18n.locale}`]"/>
      <div class="container">
        <div class="product__content">
          <div class="product__left">
            <Carousel :options="product" :data="productInfo.image" v-slot:default="item">
              <div class="product__img">
                <img :src="item.slide.image" alt="img">
              </div>
            </Carousel>
          </div>
          <div class="product__right">
            <h1 v-if="productInfo[`name_${$i18n.locale}`]">{{productInfo[`name_${$i18n.locale}`]}}</h1>
            <div class="about">
              <div class="about__item" v-if="productInfo.company_name[`name_${$i18n.locale}`]">
                <p class="paragraph">{{$t('productInfo.item1')}}</p>
                <p class="paragraph">{{productInfo.company_name[`name_${$i18n.locale}`]}}</p>
              </div>
              <div class="about__item" v-if="productInfo[`model_${$i18n.locale}`]">
                <p class="paragraph">{{$t('productInfo.item2')}}</p>
                <p class="paragraph">{{productInfo[`model_${$i18n.locale}`]}}</p>
              </div>
              <div class="about__item" v-if="productInfo[`size_${$i18n.locale}`]">
                <p class="paragraph">{{$t('productInfo.item3')}}</p>
                <p class="paragraph">{{productInfo[`size_${$i18n.locale}`]}}</p>
              </div>
<!--              <div class="about__item">-->
<!--                <p class="paragraph">{{$t('productInfo.item4')}}</p>-->
<!--                <p class="paragraph">{{productInfo[`power_${$i18n.locale}`]}}</p>-->
<!--              </div>-->
              <div class="about__item" v-if="productInfo[`power_${$i18n.locale}`]">
                <p class="paragraph">{{$t('productInfo.item5')}}</p>
                <p class="paragraph">{{productInfo[`power_${$i18n.locale}`]}}</p>
              </div>
              <div class="about__item" v-if="productInfo[`season_${$i18n.locale}`]">
                <p class="paragraph">{{$t('productInfo.item6')}}</p>
                <p class="paragraph">{{productInfo[`season_${$i18n.locale}`]}}</p>
              </div>
              <div class="about__item" v-if="productInfo[`country_${$i18n.locale}`]">
                <p class="paragraph">{{$t('productInfo.item7')}}</p>
                <p class="paragraph">{{productInfo[`country_${$i18n.locale}`]}}</p>
              </div>
              <div class="about__item" v-if="productInfo.date">
                <p class="paragraph">{{$t('productInfo.item8')}}</p>
                <p class="paragraph">{{productInfo.date}}</p>
              </div>
            </div>
            <Btn @click="close = !close" type="blue">{{$t('apply')}}</Btn>
          </div>
        </div>
      </div>
      <ModalInput :close="close" @close="close = false"/>
    </div>
</template>

<script>
import Breadcrumbs from "../components/ui/Breadcrumbs";
import Carousel from '../components/ui/carousel'
import {useCarousel} from "../hooks/ui/useCarousel";
import Btn from "../components/ui/Btn";
import ModalInput from "../components/modal/modalInput";
import {onMounted, ref, watch} from "vue";
import {useScrollLock} from "../hooks/ui/useScrollLock";
import {useProductInfo} from "../hooks/product/useProduct";
import Loader from "../components/ui/Loader";
export default {
  name: "ProductPage",
  components: {Loader, ModalInput, Btn, Breadcrumbs, Carousel},
  setup(){
    const close = ref(false);
    const {productInfo, getProduct, LoaderInfo} = useProductInfo()
    const {product} = useCarousel()
    watch(close,  () => useScrollLock(close.value))
    onMounted(getProduct)
    return {product, close, productInfo, getProduct, LoaderInfo}
  }
}
</script>

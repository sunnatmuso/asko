<template>
  <div class="filter">
    <div class="container">
      <div class="filter__wrapper">
        <div class="filter__top">
          <p class="buttonText">{{$t('filter')}}</p>
          <div class="filter__items">
            <div class="filter__item">
              <p class="cardText">{{$t('companyName')}}</p>
              <FilterSelect :value="data.name ? data.name[`name_${$i18n.locale}`] : $t('all')" :data="company" @changeValue="nameChange"/>
            </div>
            <div class="filter__item">
              <p class="cardText">{{$t('carType')}}</p>
              <FilterSelect :value="data.model ? data.model[`name_${$i18n.locale}`] : $t('all')" :data="marka" @changeValue="modelChange"/>
            </div>
            <div class="filter__item">
<!--              <p class="cardText">{{$t('shinaSize')}}</p>-->
<!--              <FilterSelect :value="data.size" :data="data.sizes" @changeValue="sizeChange"/>-->
            </div>
            <div class="filter__item">
              <Btn type="green" @click="filterProducts">{{$t('filter')}}</Btn>
              <Btn type="red" @click="filterProductsDelete">{{$t('delete')}}</Btn>
            </div>
          </div>
        </div>
      </div>
      <div class="filter__loader" v-if="loaderProducts">
        <Loader loader12="1"/>
      </div>
      <div class="filter__down" v-else-if="productsFilter && productsFilter.length">
        <template v-for="(item, i) in productsFilter" :key="i">
          <Card :data="item"/>
        </template>
      </div>
      <NotFounds v-else type="products" :image="require('../../assets/image/notFound/notProducts.webp')" :title="$t('noProducts')"/>
<!--      <div class="filter__btn">-->
<!--        <Btn type="blue">{{$t('seeMore')}}</Btn>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
import {select} from "../../hooks/ui/useSelect";
import FilterSelect from "./FilterSelect";
import Card from "./card";
import Btn from "./Btn";
import {company, marka} from "../../hooks/about/useAbout";
import {useFilterType} from "../../hooks/product/useFilterType";
import Loader
  from "./Loader";
import NotFounds
  from "./notFounds";

export default {
  name: "Filter",
  components: {NotFounds, Loader, Btn, FilterSelect, Card},
  setup() {
    const { productsFilter, loaderProducts } = useFilterType()
    const {data, modelChange, nameChange, filterProducts, filterProductsDelete} = select()
    return {nameChange, modelChange, filterProducts, filterProductsDelete, data, productsFilter, company, marka, loaderProducts}
  }
}
</script>

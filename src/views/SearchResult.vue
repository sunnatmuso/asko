<template>
  <div class="searchResult">
    <CardWrapper type="container" :title="$t('searchResultTitle')" :h1="$t('searchResult', {number: searchFilter && searchFilter.length > 0?searchFilter.length:''})">
      <div class="searchResult__loader" v-if="loaderSearch">
        <Loader loader12="1"/>
      </div>
      <div class="searchResult__content" v-else-if="searchFilter && searchFilter.length">
        <template v-for="(item, i) in searchFilter" :key="i">
          <Card :data="item"/>
        </template>
      </div>
      <NotFounds v-else type="products" :image="require('../assets/image/notFound/noProducts.webp')" :title="$t('noProducts')"/>
    </CardWrapper>
  </div>
</template>

<script>
import CardWrapper from "../components/ui/cardWrapper";
import Card from "../components/ui/card";
import { useProductSearch } from "../hooks/product/useProduct";
import Loader from "../components/ui/Loader";
import NotFounds from "../components/ui/notFounds";
export default {
  name: "SearchResult",
  components: {Card, CardWrapper, Loader, NotFounds},
  setup(){
    const { searchFilter, loaderSearch } = useProductSearch()
    return { searchFilter, loaderSearch }
  }
}
</script>

<template>
  <div class="locationShops__maps">
    <div class="container">
      <div class="locationShops__maps-wrap">
        <div class="locationShops__maps-left">
          <div class="logo"><img src="../../assets/image/asko.svg" alt="logo"></div>
          <p class="markets">{{$t('locationMarkets')}}</p>
          <div class="locationShops__maps-items">
            <div class="locationShops__maps-item" v-for="(item, i) in address" :key="i">
              <SvgIcon width="32" height="24" icon-class="maps"/>
              <div class="look">
                <p class="small">{{item[`address_${$i18n.locale}`]}}</p>
                <Btn type="seeMaps p" text-font="badge" @click="seeFromMap(item.map)">{{$t('seeFromMaps')}}</Btn>
              </div>
            </div>
          </div>
        </div>
        <div class="locationShops__maps-right">
          <iframe :src="url"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {computed, ref} from "vue";
import SvgIcon from "../ui/SvgIcon";
import Btn from "../ui/Btn";
import {address} from "../../hooks/about/useAbout";

export default {
  name: "Location",
  components: {SvgIcon, Btn},
  setup(){
    const search = ref('Toshkent shahar, Sergeli tumani Sergeli moshina bozor 6/2.2- do’kon.')
    const url = computed(() => `https://www.google.com/maps/embed/v1/search?key=AIzaSyBB3MrUX62BmjlOEu1f7OlrtpMFZ3GEtqU&q=${search.value}`)

    const seeFromMap = (searchMap) => {
      search.value = searchMap
    }
    return { url, seeFromMap, address }
  }
}
</script>

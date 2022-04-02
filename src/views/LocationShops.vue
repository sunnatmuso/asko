<template>
  <div class="locationShops">
    <TopBanner :body="$t('locationMarket', {number: 4})" :h2="$t('home.location')" type="location"/>
    <Breadcrumbs :title="$t('location')"/>
    <Location/>
  </div>
</template>
<script>

import Breadcrumbs from "../components/ui/Breadcrumbs";
import TopBanner from "../components/ui/topBanner";
import Location from "../components/locationShops/Location";
export default {
  name: "LocationShops",
  components: {Location, TopBanner, Breadcrumbs },
}
</script>

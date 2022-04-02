<template>
  <div class="contact">
    <TopBanner type="contact" :h2="$t('home.contact')" body="ASKO"/>
    <Breadcrumbs :title="$t('forContact')"/>
    <ForContact/>
  </div>
</template>

<script>
import TopBanner from "../components/ui/topBanner";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import ForContact
  from "../components/main/forContact";
export default {
  name: "Contact",
  components: {
    ForContact,
    Breadcrumbs, TopBanner}
}
</script>

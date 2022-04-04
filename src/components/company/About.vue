<template>
  <div class="company__about">
    <div class="container">
      <div class="company__about-wrap">
        <p class="inter">{{$t('home.companyAbout')}}</p>
        <p class="paragraph" v-html="`<img src='${data.image}' alt='image'/>` + data[`desc_${$i18n.locale}`]"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  props: {
    data: {}
  }
}
</script>

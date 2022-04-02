<template>
  <div class="company__numberCompany">
    <div class="container">
      <div class="company__numberCompany-items">
        <div class="company__numberCompany-item">
          <p class="bigFont">{{data.products}}+</p>
          <p class="body">{{$t('numberCompanyBody1')}}</p>
        </div>
        <div class="company__numberCompany-item">
          <p class="bigFont">{{data.partners}}+</p>
          <p class="body">{{$t('numberCompanyBody2')}}</p>
        </div>
        <div class="company__numberCompany-item">
          <p class="bigFont">{{data.clients}}+</p>
          <p class="body">{{$t('numberCompanyBody3')}}</p>
        </div>
        <div class="company__numberCompany-item">
          <p class="bigFont">{{data.filials}}+</p>
          <p class="body">{{$t('numberCompanyBody4')}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NumberCompany",
  props: {
    data: {}
  }
}
</script>

<template>
    <svg :class="svgClass" :width="wh ? wh : width" :height="wh ? wh : height" aria-hidden="true" @click="$emit('click')">
      <use x="0" y="0" :xlink:href="iconName"></use>
    </svg>
</template>
<script>
export default{
  name: "SvgIcon",
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ""
    },
    wh: String,
    width: String,
    height: String
  },
  computed: {
      iconName() {
        return `${require('../../icons/icons.svg')}#${this.iconClass}`
      },
      svgClass() {
      if (this.className){
        return `svg-icon ${this.className}`
      } else
        return `svg-icon`
    }
  }
}
</script>

<style lang="scss">
.svg-icon {
  fill: currentColor;
  &.wh{
    width: 100%;
    height: 100%;
  }
}
</style>

<template>
  <div class="btn">
    <div class="btn__content">
      <a :href="href" :class="[textFont, type]" @click.prevent.stop="$emit('click', $event)">
        <slot/>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Btn",
  props: {
    type:  String,
    href: {
      type: String,
      default: ''
    },
    textFont: {
      type: String,
      default: 'buttonText'
    }
  }
}
</script>

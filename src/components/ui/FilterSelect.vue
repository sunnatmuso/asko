<template>
  <div class="filterSelect p" :class="{open: open}" ref="target">
    <div class="filterSelect__value" @click.prevent="open = !open">
      <p class="body">{{ value ? value : 'Hammasi' }}</p>
      <svg-icon icon-class="down" class-name="down" wh="20"/>
    </div>
    <Transition name="slide-up">
      <div class="filterSelect__items" v-if="open">
        <template v-for="(item, key) in data" :key="key">
          <p class="filterSelect__item body" @click="$emit('changeValue', item); open = false"
             v-if="item[`name_${$i18n.locale}`] !== value">{{ item[`name_${$i18n.locale}`] }}
          </p>
        </template>
      </div>
    </Transition>
  </div>
</template>

<script>
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import SvgIcon from "./SvgIcon";
export default {
  name: "FilterSelect",
  props: ['data', 'value'],
  components: {SvgIcon},
  setup() {
    const target = ref(null)
    const open = ref(false)
    onClickOutside(target, () => open.value = false)
    return {target, open}
  }
}
</script>

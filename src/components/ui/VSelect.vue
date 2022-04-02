  <template>
  <div class="select p" :class="{open: open}" ref="target">
    <div class="select__value" @click.prevent="open = !open">
      <svg-icon :icon-class="value === 'РУССКИЙ' ? 'ru' : 'uzb'" class-name="flag"/>
      <p class="small">{{ value }}</p>
      <svg-icon icon-class="down" class-name="down"/>
    </div>
    <Transition name="slide-up">
      <div class="select__items" v-if="open">
        <template v-for="(item, key) in data" :key="key">
          <p class="select__item small" @click="$emit('changeValue', item); open = false"
               v-if="item.text !== value">{{ item.text }}
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
  name: "Select",
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

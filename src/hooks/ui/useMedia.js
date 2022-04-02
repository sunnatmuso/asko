import {reactive} from "vue";
import { useMediaQuery } from '@vueuse/core'
const media = reactive({
    $large: useMediaQuery('(max-width: 1540px)'),
    $xxxl: useMediaQuery('(max-width: 1349.98px)'),
    $xxl: useMediaQuery('(max-width: 1299.98px)'),
    $xl: useMediaQuery('(max-width: 1199.98px)'),
    $x: useMediaQuery('(max-width: 1023.98px)'),
    $lg: useMediaQuery('(max-width: 991.98px)'),
    $md: useMediaQuery('(max-width: 768.98px)'),
    $sm: useMediaQuery('(max-width: 576.98px)'),
    $mobile: useMediaQuery('(max-width: 475.98px)')
})
export function useMedia () {
    return {media}
}

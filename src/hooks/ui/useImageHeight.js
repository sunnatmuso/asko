import {useResizeObserver} from "@vueuse/core";
import {ref} from "vue";
export default function useImageHeight(image) {
    const height = ref(0)
    useResizeObserver(image, (entries) => {
        const entry = entries[0]
        const { width } = entry.contentRect
        if (image.value.className === 'mainBanner__wrapper'){
            height.value = width / 2.75
        }else{
            height.value = width
        }
    })
    return { height }
}

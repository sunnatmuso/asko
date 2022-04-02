import {useProduct} from "./useProduct";
import {computed, onMounted} from "vue";
import router from "../../router";
export function useFilterType(){
    const {productsFilter, loaderProducts, getProducts} = useProduct()
    const link = computed(() => router.currentRoute.value.query)
    if (Object.keys(link.value).length !== 0){
        getProducts()
    } else {
        onMounted(() => getProducts())
    }
    return {productsFilter, loaderProducts}
}

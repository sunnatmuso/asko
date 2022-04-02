import {useProduct} from "./useProduct";
import {computed, onMounted} from "vue";
import router from "../../router";
export function useFilterType(data){
    const {productsFilter, loaderProducts, getProducts} = useProduct()
    const link = computed(() => router.currentRoute.value.query)
    if (Object.keys(link.value).length !== 0){
        getProducts(`&company_name${data.name && data.name.id?'='+data.name.id:'__null'}&marka${data.model && data.model.id?'='+data.model.id:'__null'}`)
    } else {
        onMounted(() => getProducts(`&company_name${data.name && data.name.id?'='+data.name.id:'__null'}&marka${data.model && data.model.id?'='+data.model.id:'__null'}`))
    }
    return {productsFilter, loaderProducts}
}

import axios from "axios";
import {ref} from "vue";
import {base_url} from "../baseUrl";
import router from "../../router";
const productsFilter = ref(null);
const searchFilter = ref(null)
const loaderProducts = ref(false)
export function useProduct(){
    const getProducts = async (filterName = '&company_name__null') => {
        try {
            loaderProducts.value = true
            productsFilter.value = (await axios.get(`${base_url}products/${location.search}${filterName}`)).data
            loaderProducts.value = false
        }catch (e){
            console.log(e)
        }
    }
    return {getProducts, productsFilter, loaderProducts}
}

export function useProductSearch(){
    const loaderSearch = ref(false)
    const getProducts = async (search) => {
        try {
            loaderSearch.value = true
            searchFilter.value = (await axios.get(`${base_url}products/?search=${search}`)).data
            loaderSearch.value = false
        }catch (e){
            console.log(e)
        }
    }
    return {getProducts, searchFilter, loaderSearch}
}


export function useProductInfo(){
    const productInfo = ref(null)
    const LoaderInfo = ref(false)

    const getProduct = async () => {
        LoaderInfo.value = true
        try {
            productInfo.value = (await axios.get(`${base_url}products/${router.currentRoute.value.params.id}`)).data
            LoaderInfo.value = false
        }catch (e){
            console.log(e)
        }
    }
    return { productInfo, getProduct, LoaderInfo }
}

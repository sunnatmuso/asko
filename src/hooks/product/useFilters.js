import {ref} from "vue";
import router from "../../router";

const filtersObject = ref({})
export default async function useFilters(path, type, value){
    // filtersObject.value[type] = value
    // const serialize = (obj) => {
    //     let str = [];
    //     for (let p in obj) str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    //     return str.join("&");
    // }
    // history.pushState(history.state, null, "?" + serialize(filtersObject.value));
    filtersObject.value[type] = `${value}`
    await router.push({path: path, query: filtersObject.value})
}

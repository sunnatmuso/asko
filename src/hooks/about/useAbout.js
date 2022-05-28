import axios from "axios";
import {ref} from "vue";
import {base_url} from "../baseUrl";
const slider = ref(null)
const slider2 = ref(null)
const brand = ref(null)
const products = ref(null)
const newProducts = ref(null)
const testimonials = ref(null)
const contacts = ref(null)
const marka = ref(null)
const company = ref(null)
const address = ref(null)
const about = ref(null)
const banner = ref(null)
const loader = ref(false)
export async function useAbout(){
    const urls = [
        `${base_url}slider/`,
        `${base_url}products/`,
        `${base_url}brand/`,
        `${base_url}testimonials/`,
        `${base_url}contacts/`,
        `${base_url}marka/`,
        `${base_url}company/`,
        `${base_url}address/`,
        `${base_url}about/`,
        `${base_url}slider2/`,
        `${base_url}banner/`,
    ]
    try {
        loader.value = true
        await (axios.all(urls.map((url) => axios.get(url)))).then((res) => {
            slider.value = res[0].data
            products.value = res[1].data
            brand.value = res[2].data
            testimonials.value = res[3].data
            contacts.value = res[4].data
            marka.value = res[5].data
            company.value = res[6].data
            address.value = res[7].data
            about.value = res[8].data
            slider2.value = res[9].data
            banner.value = res[10].data
            newProducts.value = products.value.filter(e => e.new === true)
        })
        setTimeout(() => loader.value = false, 1000)
    }catch (e){
        console.log(e)
    }
}

export { slider, brand, products, testimonials, contacts, newProducts, marka, company, address, about, loader, slider2, banner }

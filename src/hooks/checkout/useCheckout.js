import {ref} from "vue";
import axios from "axios";
import {useValidate} from "./useVuelidate";
import {base_url} from "../baseUrl";
import router
    from "../../router";
const data = ref({})
const {v$, state} = useValidate()
const close = ref(false)
const res = ref(null)
export default function useCheckout() {
    const submit = async () => {
        v$.value.$touch()
        if (v$.value.$invalid) {
            return
        }
        data.value = {
            name: state.yourName,
            phone_number: '+' + state.phoneNumber.replace(/[()-/\s]/g, ''),
        }

        try {
            res.value = (await axios.post(`${base_url}contact_form/`, data.value)).data
            await router.push('/')
            close.value = true
        }catch (e){
            console.log(e)
        }
    }
    return {res, submit, close}
}

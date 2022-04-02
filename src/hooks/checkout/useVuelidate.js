import {reactive} from "vue";
import useVuelidate from '@vuelidate/core'
import {required, minLength} from '@vuelidate/validators'
const state = reactive({
    yourName: '',
    phoneNumber: '',
})
const rules = {
    yourName: { required },
    phoneNumber: { minLength: minLength(12), required },
}
const v$ = useVuelidate(rules, state)

export function useValidate () {
    return {state, v$ }
}

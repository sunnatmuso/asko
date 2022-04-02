import {reactive} from "vue";
import {useProduct} from "../product/useProduct";
const {getProducts} = useProduct()

const data = reactive({
    value: localStorage.getItem('text') || 'O’ZBEKCHA',
    language: [
        {value: 'ru', text: 'РУССКИЙ'},
        {value: 'uz', text: 'O’ZBEKCHA'},
    ],
//    for name
    name: null,
//    for model
    model: null,
//    for sizes
    size: JSON.parse(localStorage.getItem('size')) || '195/65/15',
    filterName: null,
    filterModel: null
})

const nameChange = (option) => {
    data.name = option
}
const modelChange = (option) => {
    data.model = option
}

const sizeChange = (option) => {
  localStorage.setItem("size", JSON.stringify(option));
  data.size = option
}

const filterProducts = async () => {
    if (data.name && data.name.id || data.model && data.model.id) {
        data.filterName = data.name
        data.filterModel = data.model
        await getProducts(`&company_name${data.name && data.name.id?'='+data.name.id:'__null'}&marka${data.model && data.model.id?'='+data.model.id:'__null'}`)
    }
}
const filterProductsDelete = async () => {
    await getProducts()
    data.name = null
    data.model = null
    data.filterName = null
    data.filterModel = null
}

export function select () {
    return {data, nameChange, modelChange, sizeChange, filterProducts, filterProductsDelete}
}


/*
export default class useSelect {
    constructor(element) {
        this.element = element
        this.options = getFormattedOptions(element.querySelectorAll("option"))
        this.customElement = document.createElement('div')
        this.labelElement = document.createElement('span')
        this.optionsCustomElement = document.createElement("ul")
        setupCustomElement(this)
        element.style.display = "none"
        element.after(this.customElement)
    }

    get selectedOption() {
        return this.options.find(option => option.selected)
    }

    get selectedOptionIndex() {
        return this.options.indexOf(this.selectedOption)
    }

    selectValue(value) {
        const newSelectedOption = this.options.find(option => {
            return option.value === value
        })
        const prevSelectedOption = this.selectedOption
        prevSelectedOption.selected = false
        prevSelectedOption.element.selected = false

        newSelectedOption.selected = true
        newSelectedOption.element.selected = true

        this.labelElement.innerText = newSelectedOption.label
        this.optionsCustomElement
            .querySelector(`[data-value="${prevSelectedOption.value}"]`)
            .classList.remove("selected")
        const newCustomElement = this.optionsCustomElement.querySelector(
            `[data-value="${newSelectedOption.value}"]`
        )
        newCustomElement.classList.add("selected")
        newCustomElement.scrollIntoView({ block: "nearest" })
    }
}


function setupCustomElement(select) {
    select.customElement.classList.add("custom-select-container")
    select.customElement.tabIndex = 0

    select.labelElement.classList.add("custom-select-value")
    select.labelElement.innerText = select.selectedOption.label
    select.customElement.append(select.labelElement)

    select.optionsCustomElement.classList.add("custom-select-options")
    select.options.forEach(option => {
        const optionElement = document.createElement("li")
        optionElement.classList.add("custom-select-option")
        optionElement.classList.toggle("selected", option.selected)
        optionElement.innerText = option.label
        optionElement.dataset.value = option.value
        optionElement.addEventListener("click", () => {
            select.selectValue(option.value)
            select.optionsCustomElement.classList.remove("show")
        })
        select.optionsCustomElement.append(optionElement)
    })
    select.customElement.append(select.optionsCustomElement)

    select.labelElement.addEventListener("click", () => {
        select.optionsCustomElement.classList.toggle("show")
    })

    select.customElement.addEventListener("blur", () => {
        select.optionsCustomElement.classList.remove("show")
    })

    let debounceTimeout
    let searchTerm = ""
    select.customElement.addEventListener("keydown", e => {
        switch (e.code) {
            case "Space":
                select.optionsCustomElement.classList.toggle("show")
                break
            case "ArrowUp": {
                const prevOption = select.options[select.selectedOptionIndex - 1]
                if (prevOption) {
                    select.selectValue(prevOption.value)
                }
                break
            }
            case "ArrowDown": {
                const nextOption = select.options[select.selectedOptionIndex + 1]
                if (nextOption) {
                    select.selectValue(nextOption.value)
                }
                break
            }
            case "Enter":
            case "Escape":
                select.optionsCustomElement.classList.remove("show")
                break
            default: {
                clearTimeout(debounceTimeout)
                searchTerm += e.key
                debounceTimeout = setTimeout(() => {
                    searchTerm = ""
                }, 500)

                const searchedOption = select.options.find(option => {
                    return option.label.toLowerCase().startsWith(searchTerm)
                })
                if (searchedOption) {
                    select.selectValue(searchedOption.value)
                }
            }
        }
    })
}

function getFormattedOptions(optionElements) {
    return [...optionElements].map(optionElement => {
        return {
            value: optionElement.value,
            label: optionElement.label,
            selected: optionElement.selected,
            element: optionElement,
        }
    })
}
*/

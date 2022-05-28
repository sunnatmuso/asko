import {ref} from "vue";

const main   = ref(null);
const thumbs = ref(null);
const mains   = ref(null);
const mainThumbs   = ref(null);
const nameTestimonials = ref(null)

const nameTest = {
    type      : 'slide',
    perPage   : 1,
    perMove   : 1,
    arrows: false,
    pagination: false,
}

const thumbOptions = {
    type      : 'slide',
    perPage   : 1,
    perMove   : 1,
    gap       : '1rem',
    pagination: false,
};
const thumbsOptions = {
    type        : 'slide',
    rewind      : true,
    gap         : '1em',
    pagination  : false,
    focus: 'center',
    arrows: false,
    fixedWidth  : 86,
    fixedHeight : 86,
    cover       : true,
    // focus       : 'center',
    isNavigation: true,
    updateOnMove: true,
    breakpoints: {
        576.98: {
            fixedWidth  : 54,
            fixedHeight : 54,
        },
    }
};

const mainBanner = {
    type      : 'loop',
    perPage   : 1,
    arrows: false,
    pagination: false,
    autoplay: 1,
    interval: 3000,
};

const cards = {
    type      : 'loop',
    perPage   : 4,
    arrows: true,
    perMove: 1,
    pagination: false,
    breakpoints: {
        800.98: {
            perPage: 3,
        },
        576.98: {
            perPage: 2,
        },
    }
};

const brands = {
    type: 'loop',
    arrows: true,
    perPage: 6,
    perMove: 1,
    pagination: false,
    autoplay: 1000,
    pauseOnHover: true,
    // fixedWidth  : 170,
    // fixedHeight : 110,
    breakpoints: {
        1199.98: {
            fixedWidth  : 170,
            fixedHeight : 110,
            gap: 10
        },
        768.98: {
            arrows: false,
            fixedWidth: 170,
            fixedHeight : 110,
            gap: 10
        },
    }
}

const product = {
    type: 'slide',
    perPage: 1,
    pagination: false,
    arrows: true
}


export function useCarousel(){
    return {nameTest, nameTestimonials, thumbOptions, thumbsOptions, mains, main, mainThumbs, thumbs, mainBanner, brands, cards, product}
}

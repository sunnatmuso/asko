import {app, errorPage} from "./use";
import {useAbout} from "./hooks/about/useAbout";

useAbout().then(() => {
    app.mount('#app')
}).catch((e) => {
    errorPage.mount('#app')
    console.log(e)
})

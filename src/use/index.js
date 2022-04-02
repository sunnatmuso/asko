import { createApp } from 'vue'
import App from '../App'
import ErrorPage from '../ErrorPage'
import  Maska  from 'maska'
import '../assets/scss/_styles.scss'

const app = createApp(App)
const errorPage = createApp(ErrorPage)

import i18n from '../i18n'
app.use(i18n)
errorPage.use(i18n)

// mask
app.use(Maska);

import router from '../router'
import store from '../store'
app.use(router)
app.use(store)
export { app, errorPage }

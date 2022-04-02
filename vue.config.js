'use strict';
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/' + process.env.CI_PROJECT_NAME + '/'
        : '/',
    pluginOptions: {
        i18n: {
            locale: 'uz',
            fallbackLocale: 'uz',
            localeDir: 'locales',
            enableLegacy: false,
            runtimeOnly: false,
            compositionOnly: false,
            fullInstall: true
        }
    },
    // devServer: {
    //     proxy: 'https://api.venus.uz/'
    // }
};


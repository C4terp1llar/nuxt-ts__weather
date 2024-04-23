export default defineNuxtConfig({
    devtools: {enabled: true},
    build: {
        transpile: ['vuetify'],
    },
    css: [
        '@/assets/css/main.scss',
        'vuetify/lib/styles/main.sass'
    ],
    modules: [
        'nuxt-icon',
        '@pinia/nuxt'
    ],
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },
})
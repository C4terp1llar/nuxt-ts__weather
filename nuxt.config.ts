
export default defineNuxtConfig({
    devtools: {enabled: true},
    build: {
        transpile: ['vuetify'],
    },
    head: {
        link: [
            {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
            {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true},
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap'
            }
        ]
    },
    css: [
        '@/assets/css/main.scss',
        'vuetify/lib/styles/main.sass'
    ],
    modules: [
        'nuxt-icon',
    ],
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },
})
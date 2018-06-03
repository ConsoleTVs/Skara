module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        bodyAttrs: {
            class: 'bg-grey-light text-black'
        },
        title: 'Skara',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Tailwind & Vue administration panel' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    loading: {
        color: '#6574CD',
        failedColor: '#E3342F',
        height: '3px',
    },

    plugins: [
        '@/plugins/Charts',
        {
            ssr: false,
            src: '@plugins/appear'
        }
    ],

    transition: {
        name: 'page',
        mode: 'out-in',
    },

    /*
    ** Build configuration
    */
    build: {
        postcss: [
            require('tailwindcss')('./tailwind.js'),
            require('autoprefixer')
        ],

        /*
        ** Run ESLint on save
        */
        extend (config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    },
    modules: [
        '@nuxtjs/axios',
    ],
    router: {
        linkExactActiveClass: 'font-bold'
    },
    css: [
        '@/assets/sass/app.scss'
    ],
    env: {
        baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    }
}

/* eslint-disable eol-last */
/* eslint-disable indent */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        extend: {
            height: {
                '2/10': '20%',
                '8/10': '80%',
                '3/10': '30%',
                '7/10': '70%'
            }
        }
    },
    plugins: []
}
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'rdx-purple': '#793EF5',
                'background-gray': '#F1F4F8'
            }
        }
    },
    plugins: []
};

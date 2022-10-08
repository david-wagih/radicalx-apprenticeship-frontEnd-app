/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'rdx-purple': '#793EF5',
                'background-gray': '#F1F4F8',
                'background-Md':'rgba(3, 2, 23, 0.3)',
            }
        }
    },
    plugins: []
};

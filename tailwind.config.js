/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        screens: {
            'tb': '640px',
            'lp': '1025px',
            'dp': '1441px',
            },
        extend: {
            fontFamily: {
                'arizona-flare': "ABCArizonaFlareVariable, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
           },
        }
    },
    
    plugins: []
  };
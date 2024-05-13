// tailwind.config.js

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1110px',
      },
      colors: {
        'themeBlue': '#094B72',
        'lightBlue': '#E7F6FF',
        'titleColor': '#2D2F30',
        'descColor': '#4F4F4F',
        'sectionLightBlue': '#F2F7FF'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'play': ["Playfair Display", 'serif'],
        'jakarta': ["Plus Jakarta Sans", 'sans-serif']
      },
      fontSize: {
        '12': '12px',
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '22': '22px',
        '24': '24px',
        '48': '48px',
        '90': '90px',
      },
    },
  },
  plugins: [],
};
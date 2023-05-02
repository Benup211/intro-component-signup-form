/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      'ms':{'max':'600px'},
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors:{
        'mentor-red':'hsl(0, 100%, 74%)',
        'mentor-green':'hsl(154, 59%, 51%)',
        'mentor-blue':'hsl(248, 32%, 49%)',
        'mentor-dark-blue':'hsl(249, 10%, 26%)',
        'mentor-grayish-blue':'hsl(246, 25%, 77%)',
        'mentor-anchor':'hsl(228, 45%, 44%)',
      },
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


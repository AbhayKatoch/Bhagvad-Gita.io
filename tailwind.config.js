

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'bg-black':'#252525',
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 5px 10px rgba(255, 215, 224, 0.5), 0 0 15px 30px rgba(255, 215, 0, 0.3), 0 0 30px 60px rgba(255, 215, 0, 0.2)',
          },
          '50%': {
            boxShadow: '0 0 10px 15px rgba(255, 215, 224, 0.8), 0 0 30px 60px rgba(255, 215, 0, 0.6), 0 0 30px 60px rgba(255, 215, 0, 0.4)',
          },
        },
      },
      animation: {
        glow: 'glow 3s infinite alternate',
      },
    },
    
  },
  
}


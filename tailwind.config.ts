
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
			background: "#D7D4C1", 
			primary: '#1F1F1F', 
			secondary: '#FAF9F6',
			success: '#46A60E', 
			error: '#DE1514', 
			brand: "#FF00FF",
			placeholder: '#D9D9D9'
  	}
  },
  },
  plugins: [import("tailwindcss-animate")],
};

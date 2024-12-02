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
			background: "#161618", 
			primary: '#1F1F1F', // Dark grayish tone for sidebar background
			secondary: '#FAF9F6', // Light beige or off-white for main background
			info: '#4fc3f7', // Light blue for informational elements (budget indicator)
			warning: '#ffcc80', // Light peach for caution (warning states)
			success: '#66bb6a', // Green for successful states (positive transactions)
			error: '#f44336', // Red for errors or negative actions
			brand: "#FF00FF",
			placeholder: '#D9D9D9'
  	}
  },
  },
  plugins: [require("tailwindcss-animate")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // background: "#F8F5F0",
        background: "#F6F6F9",
        primary: '#343434', // Dark grayish tone for sidebar background
        secondary: 'white', // Light beige or off-white for main background
        info: '#4fc3f7', // Light blue for informational elements (budget indicator)
        warning: '#ffcc80', // Light peach for caution (warning states)
        success: '#66bb6a', // Green for successful states (positive transactions)
        error: '#f44336', // Red for errors or negative actions
        brand: "#FF00FF",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8F5F0",
        foreground: "var(--foreground)",
        primary: '#343434', // Dark grayish tone for sidebar background
        secondary: '#f5f5f5', // Light beige or off-white for main background
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

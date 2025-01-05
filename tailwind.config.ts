import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(accordion|button|card|input|navbar|divider|ripple|spinner|form).js"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#1e5a9e',
        headingtext:"#0b093b",
       },
       backgroundImage: {
        primaryGradient: 'linear-gradient(to right, #eab308, #ec4899)',
        'custom-gradient': 'linear-gradient(108deg, #0dad81, #005385 30%, #011b40 65%)',
      },
    },
  },
  plugins: [nextui()],
} satisfies Config;

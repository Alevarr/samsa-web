/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
import colors from "tailwindcss/colors";

module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      aspectRatio: {
        "3/4": "3 / 4",
      },
      scale: {
        "200": "2.0",
      },
      gridTemplateColumns: {
        fill: "repeat(auto-fill, minmax(220px, 1fr))",
        sidebar: "6.3rem minmax(0, 1fr)",
        "single-275px": "275px",
      },
      screens: {
        xs: "384px",
        "3xl": "1792px",
        "4xl": "2048px",
      },
      colors: {
        // tremor light mode
        tremor: {
          brand: {
            faint: colors.blue[50],
            muted: colors.blue[200],
            subtle: colors.blue[400],
            DEFAULT: colors.blue[500],
            emphasis: colors.blue[700],
            inverted: colors.white,
          },
          background: {
            muted: colors.gray[50],
            subtle: colors.gray[100],
            DEFAULT: colors.white,
            emphasis: colors.gray[700],
          },
          border: {
            DEFAULT: colors.gray[200],
          },
          ring: {
            DEFAULT: colors.gray[200],
          },
          content: {
            subtle: colors.gray[400],
            DEFAULT: colors.gray[500],
            emphasis: colors.gray[700],
            strong: colors.gray[900],
            inverted: colors.white,
          },
        },
        // tremor dark mode
        "dark-tremor": {
          brand: {
            faint: "#0B1229",
            muted: colors.blue[950],
            subtle: colors.blue[800],
            DEFAULT: "#ffb02e",
            emphasis: "#f98707",
            inverted: "#000000",
          },
          background: {
            muted: "hsl(var(--nextui-content1) / 0.8)",
            subtle: "hsl(var(--nextui-content1) / 0.9)",
            DEFAULT: "hsl(var(--nextui-content1) / 1)",
            emphasis: "hsl(var(--nextui-content1) / 1.1)",
          },
          border: {
            DEFAULT: "rgba(255, 255, 255, 0.15)", // NextUI dark mode border color
          },
          ring: {
            DEFAULT: "rgba(255, 255, 255, 0.15)", // NextUI dark mode border color
          },
          content: {
            subtle: "rgb(143, 143, 143)", // NextUI dark mode text color
            DEFAULT: "rgb(204, 204, 204)", // NextUI dark mode text color
            emphasis: "rgb(230, 230, 230)", // NextUI dark mode text color
            strong: "rgb(255, 255, 255)", // NextUI dark mode text color
            inverted: "#000000",
          },
        },
      },
      boxShadow: {
        // light
        "tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "tremor-card":
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "tremor-dropdown":
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        // dark
        "dark-tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "dark-tremor-card":
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "dark-tremor-dropdown":
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      },
      borderRadius: {
        "tremor-small": "0.375rem",
        "tremor-default": "0.5rem",
        "tremor-full": "9999px",
      },
      fontSize: {
        "tremor-label": ["0.75rem", { lineHeight: "1rem" }],
        "tremor-default": ["0.875rem", { lineHeight: "1.25rem" }],
        "tremor-title": ["1.125rem", { lineHeight: "1.75rem" }],
        "tremor-metric": ["1.875rem", { lineHeight: "2.25rem" }],
      },
    },
  },
  //need for tremor ui
  safelist: [
    {
      pattern:
        /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
  ],

  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            primary: {
              "50": "#fff9eb",
              "100": "#ffeec6",
              "200": "#ffdb88",
              "300": "#ffc34a",
              "400": "#ffb02e",
              "500": "#f98707",
              "600": "#dd6102",
              "700": "#b74106",
              "800": "#94320c",
              "900": "#7a290d",
              DEFAULT: "#ffb02e",
              foreground: "#000",
            },
            secondary: {
              50: "#EDE9FE",
              100: "#DDD6FE",
              200: "#C4B5FD",
              300: "#A78BFA",
              400: "#8B5CF6",
              500: "#7C3AED",
              600: "#6D28D9",
              700: "#5B21B6",
              800: "#4C1D95",
              900: "#3C1A79",
              DEFAULT: "#6D28D9",
              foreground: "#fff",
            },
          },
        },
      },
      layout: {
        radius: {
          small: "6px", // rounded-small
          medium: "8px", // rounded-medium
          large: "10px", // rounded-large
        },
      },
    }),
  ],
};

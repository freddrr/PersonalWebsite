const config: {
	plugins: { handler: () => void }[];
	theme: {
		container: { padding: string; center: boolean };
		extend: {
			borderRadius: { md: string; sm: string; lg: string };
			colors: {
				background: string;
				foreground: string;
				accent: { hover: string; DEFAULT: string };
				primary: string
			}
		};
		fontFamily: { primary: string };
		screens: { xl: string; md: string; sm: string; lg: string }
	};
	darkMode: string[];
	content: string[]
} = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container: {
		center: true,
		padding: "15px",
	},
	screens: {
		sm: "640px",
		md: "768px",
		lg: "960px",
		xl: "1200px",
	},
	fontFamily: {
		primary: "var(--font-jetbrainsMono)",
	},
  	extend: {
  		colors: {
			primary: "#1c1c22",
			accent: {
				DEFAULT: "#ffc800",
				hover: "#00e187"
			},
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
	// eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
export default config;
